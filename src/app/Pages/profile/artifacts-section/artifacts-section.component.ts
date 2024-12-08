import { Component } from '@angular/core';
import { Artifact } from '../../../Models/Artifact';
import { Site } from '../../../Models/Site';
import { ArtifactService } from '../../../Services/artifact.service';
import { SiteService } from '../../../Services/site.service';
import { CommonModule, formatCurrency } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ArtifactComponent } from "../../../Cards/Editable/artifact/artifact.component";
import { AuthService } from '../../../Services/auth.service';

@Component({
  selector: 'app-artifacts-section',
  standalone: true,
  imports: [CommonModule, FormsModule, ArtifactComponent],
  templateUrl: './artifacts-section.component.html',
  styleUrl: './artifacts-section.component.css'
})
export class ArtifactsSectionComponent {
  artifacts: Artifact[] = [];  // List of artifacts
  sites: Site[] = [];  // List of valid sites
  newArtifact: Artifact = {
    discoveredById: this.authService.getLoggedInUserId() || " ",
    artifactId: " ",
    siteId: " ",
    name: '',
    material: '',
    condition: '',
    dateFound: '',
    preservationStatus: '',
    currentLocation: "",
    previousLocation:""
  };  // New artifact object for creation
  showNewArtifactModal: boolean = false;  // Flag for modal visibility

  constructor(
    private authService: AuthService,
    private artifactService: ArtifactService,
    private siteService: SiteService
  ) {}

  ngOnInit(): void {
    this.fetchArtifacts();
    this.fetchSites();
  }

  // Fetch artifacts
  fetchArtifacts(): void {
    this.artifactService.getAllArtifacts().subscribe(data => {
      this.artifacts = data;
    });
  }

  // Fetch valid sites
  fetchSites(): void {
    this.siteService.getAllSites().subscribe(sites => {
      this.sites = sites;
    });
  }

  // Show modal to create a new artifact
  showCreateArtifactModal(): void {
    this.showNewArtifactModal = true;
  }

  // Create a new artifact
  createArtifact(): void {
    this.artifactService.createArtifact(this.newArtifact).subscribe(() => {
      this.fetchArtifacts();  // Refresh the artifact list
      this.showNewArtifactModal = false;  // Hide modal
      this.newArtifact = {currentLocation: "", previousLocation:"",discoveredById: "", artifactId: " ", siteId: " ", name: '', material: '', condition: '', dateFound: '', preservationStatus: '' };  // Reset form
    });
  }

  // Update the artifact
  updateArtifact(updatedArtifact: Artifact): void {
    this.artifactService.updateArtifact(updatedArtifact.artifactId, updatedArtifact).subscribe(() => {
      this.fetchArtifacts();  // Refresh the artifact list
    });
  }

  // Delete the artifact
  deleteArtifact(artifactId: string): void {
    this.artifactService.deleteArtifact(artifactId).subscribe(() => {
      this.fetchArtifacts();  // Refresh the artifact list
    });
  }
}

