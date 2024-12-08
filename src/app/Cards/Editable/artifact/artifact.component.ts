import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Artifact } from '../../../Models/Artifact';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Site } from '../../../Models/Site';
import { ArtifactService } from '../../../Services/artifact.service';
import { SiteService } from '../../../Services/site.service';

@Component({
  selector: 'app-artifact',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './artifact.component.html',
  styleUrl: './artifact.component.css'
})
export class ArtifactComponent {
 @Input() artifact!: Artifact; // Input artifact to display
  @Output() updateArtifact = new EventEmitter<Artifact>(); // Emit updated artifact
  @Output() deleteArtifact = new EventEmitter<string>(); // Emit artifact ID for deletion
  showModal = false;  // Controls visibility of the modal
  

  sites: Site[] = [];  // Array to hold the list of sites

  constructor(
    private artifactService: ArtifactService, 
    private siteService: SiteService  // Inject SiteService
  ) {}

  ngOnInit(): void {
    // Fetch all sites from SiteService on component initialization
    this.siteService.getAllSites().subscribe(
      (data: Site[]) => {
        this.sites = data;  // Populate the sites array with the fetched data
      },
      (error) => {
        console.error('Error fetching sites:', error);  // Handle error if any
      }
    );
  }

  // Opens the update modal
  openUpdateModal(artifact: Artifact) {
    this.artifact = { ...artifact };  // Clone the artifact to edit
    this.showModal = true;
  }

  onUpdate() {
    if (this.artifact.name && this.artifact.material && this.artifact.condition) {
      this.artifactService.updateArtifact(this.artifact.artifactId, this.artifact).subscribe(response => {
        console.log('Artifact updated successfully!', response);
        this.showModal = false;  // Close the modal
      });
    } else {
      alert('Please fill in all required fields.');
    }
  }

  // Delete the artifact
  onDelete() {
    this.artifactService.deleteArtifact(this.artifact.artifactId).subscribe(() => {
      console.log('Artifact deleted');
    });
    this.toggleDeleteModal();
  }

  deleteModalOpen = false;
  toggleDeleteModal(){
    this.deleteModalOpen= !this.deleteModalOpen;
  }


}