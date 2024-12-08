import { Component } from '@angular/core';
import { SiteService } from '../../../Services/site.service';
import { Site } from '../../../Models/Site';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../Services/auth.service';
import { SiteComponent } from "../../../Cards/Editable/site/site.component";
import { ArtifactsSectionComponent } from "../artifacts-section/artifacts-section.component";
import { ExcavationSectionComponent } from "../excavation-section/excavation-section.component";

@Component({
  selector: 'app-archaeologist',
  standalone: true,
  imports: [FormsModule, CommonModule, SiteComponent, ArtifactsSectionComponent, ExcavationSectionComponent],
  templateUrl: './archaeologist.component.html',
  styleUrls: ['./archaeologist.component.css'],
})
export class ArchaeologistComponent {
  userSites: Site[] = [];
  isAddModalOpen = false;
  isEditModalOpen = false;
  currentSite: Site = {
    siteId: '0',
    name: '',
    location: '',
    description: null,
    discoveredById: this.authService.getLoggedInUserId(),
    imageUrl: '',
    conservationStatus: '',
    dateDiscovered: '',
  };

  constructor(private siteService: SiteService, private authService: AuthService) {}

  ngOnInit() {
    this.getUserSites();
  }

  // Fetch user's sites
  getUserSites() {
    const loggedInUserId = this.authService.getLoggedInUserId();
    if (loggedInUserId) {
      this.siteService.getSiteByDiscoveredById(loggedInUserId).subscribe((sites) => {
        this.userSites = sites;
      });
    }
  }

  // Open modal for adding a new site
  openAddModal() {
    this.isAddModalOpen = true;
    this.resetCurrentSite();
  }

  // Open modal for editing an existing site
  openEditModal(site: Site) {
    this.currentSite = { ...site };
    this.isEditModalOpen = true;
  }

  // Close any modal
  closeModal() {
    this.isAddModalOpen = false;
    this.isEditModalOpen = false;
  }

  // Add a new site
  addSite() {
    this.siteService.createSite(this.currentSite).subscribe((site) => {
      this.userSites.push(site);
      this.closeModal();
    });
  }

  // Update an existing site
  updateSite() {
    this.siteService.updateSite(this.currentSite.siteId, this.currentSite).subscribe(() => {
      const index = this.userSites.findIndex((s) => s.siteId === this.currentSite.siteId);
      if (index !== -1) this.userSites[index] = { ...this.currentSite };
      this.closeModal();
    });
  }

  // Delete a site
  deleteSite(siteId: string) {
    this.siteService.deleteSite(siteId).subscribe(() => {
      this.userSites = this.userSites.filter((site) => site.siteId !== siteId);
    });
  }

  // Reset current site object
  private resetCurrentSite() {
    this.currentSite = {
      siteId: '0',
      name: '',
      location: '',
      description: null,
      discoveredById: this.authService.getLoggedInUserId(),
      imageUrl: '',
      conservationStatus: '',
      dateDiscovered: '',
    };
  }
}