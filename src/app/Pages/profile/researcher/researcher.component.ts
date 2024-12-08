import { Component } from '@angular/core';
import { PublicationService } from '../../../Services/publication.service';
import { Publication } from '../../../Models/Publication';
import { PublicationComponent } from "../../../Cards/Editable/publication/publication.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../Services/auth.service';
import { Site } from '../../../Models/Site';
import { SiteService } from '../../../Services/site.service';

@Component({
  selector: 'app-researcher',
  standalone: true,
  imports: [PublicationComponent, CommonModule, FormsModule],
  templateUrl: './researcher.component.html',
  styleUrl: './researcher.component.css'
})
export class ResearcherComponent {
publications: Publication[] = [];
  isAddingPublication: boolean = false;
  newPublication: Publication = {
    publicationId: " ",
    siteId: "", // Replace with appropriate SiteId
    authorId: this.authService.getLoggedInUserId()||"", // Replace with logged-in user's ID
    authorName: this.authService.getLoggedInUserData().name || "",
    title: '',
    abstract: '',
    datePublished: Date.now.toString(),
    fileLink: '',
  };

  sites: Site[] = [];  // Store the list of sites



  

  constructor(private publicationService: PublicationService, private authService: AuthService, private siteService: SiteService) {}

  ngOnInit() {
    this.fetchPublications();
    this.siteService.getAllSites().subscribe(
      (sites) => {
        this.sites = sites;
      },
      (error) => {
        console.error('Error fetching sites', error);
      }
    );
    console.log(this.sites);
  }

  fetchPublications() {
    this.publicationService.getAllPublications().subscribe(
      (data) => {
        this.publications = data;
      },
      (error) => {
        console.error('Error fetching publications:', error);
      }
    );
  }

  toggleAddPublicationModal() {
    this.isAddingPublication = !this.isAddingPublication;
    this.newPublication = {
      publicationId: " ",
      siteId: "",
      authorId: this.authService.getLoggedInUserId()||"", // Replace with logged-in user's ID
    authorName: this.authService.getLoggedInUserData().name || "",
      title: '',
      abstract: '',
      datePublished: Date.now.toString(),
      fileLink: '',
    };
  }

  addPublication() {
    console.log(this.newPublication);
    if (this.newPublication.title && this.newPublication.fileLink) {
      this.publicationService.createPublication(this.newPublication).subscribe(
        (data) => {
          this.publications.push(data);
          this.toggleAddPublicationModal();
        },
        (error) => {
          console.error('Error adding publication:', error);
        }
      );
    } else {
      alert('Please fill in all required fields.');
    }
  }

  removePublication(publicationId: string) {
    this.publicationService.deletePublication(publicationId).subscribe(
      () => {
        this.publications = this.publications.filter(
          (pub) => pub.publicationId !== publicationId
        );
      },
      (error) => {
        console.error('Error deleting publication:', error);
      }
    );
  }
}
