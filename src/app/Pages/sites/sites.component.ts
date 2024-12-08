import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Site } from '../../Models/Site';
import { Observable } from 'rxjs';
import { SiteService } from '../../Services/site.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SitecardComponent } from "../../Cards/sitecard/sitecard.component";

@Component({
  selector: 'app-sites',
  standalone: true,
  imports: [FormsModule, CommonModule, SitecardComponent],
  templateUrl: './sites.component.html',
  styleUrl: './sites.component.css'
})
export class SitesComponent {
sites: Site[] = [];
  filteredSites: Site[] = [];
  searchQuery: string = '';
  filterLocation: string = '';

  constructor(private siteService: SiteService) {}

  ngOnInit(): void {
    this.siteService.getAllSites().subscribe((data: Site[]) => {
      this.sites = data;
      this.filteredSites = data;
    });
  }

  // Search function
  onSearchChange(): void {
    this.filteredSites = this.sites.filter(site => 
      site.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
      site.location.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }

  // Filter function by location
  onFilterLocationChange(): void {
    this.filteredSites = this.sites.filter(site => 
      site.location.toLowerCase().includes(this.filterLocation.toLowerCase())
    );
  }
}