import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Publication } from '../../../Models/Publication';
import { PublicationService } from '../../../Services/publication.service';

@Component({
  selector: 'app-publication',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './publication.component.html',
  styleUrls: ['./publication.component.css']
})
export class PublicationComponent {
  @Input() publication!: Publication; // Expecting 'publication' to be passed in as input
  @Input() siteId: string = '';

  isEditing = false;
  updatedTitle = '';  // Bind to input field in edit mode
  updatedContent = '';
  updatedAbstract = '';
  updatedFileLink = '';
  ngOnChanges() {
    if (this.publication) {
      // Initialize updated fields with publication data if available
      this.updatedTitle = this.publication.title || '';  // Assuming title is part of the publication
      this.updatedContent = this.publication.abstract || '';  // Assuming abstract is part of the publication
    }
  }

  toggleEdit() {
    this.isEditing = !this.isEditing;

    // Reset the updated values to the original ones if cancelling the edit
    if (!this.isEditing) {
      this.updatedTitle = this.publication?.title || '';
      this.updatedContent = this.publication?.abstract || '';
      this.updatedAbstract = this.publication?.abstract || '';
      this.updatedFileLink = this.publication?.fileLink || '';
    } else {
      this.updatedTitle = this.publication?.title || '';
      this.updatedContent = this.publication?.abstract || '';
      this.updatedAbstract = this.publication?.abstract || '';
      this.updatedFileLink = this.publication?.fileLink || '';
    }
  }

  updateCard() {
    if (this.publication) {
      this.publication.title = this.updatedTitle;  // Update the publication's title
      this.publication.abstract = this.updatedContent;  // Update the publication's abstract
      this.publication.fileLink = this.updatedFileLink;  // Update the publication's title
      this.publication.siteId = this.siteId; 
      this.publicationService.updatePublication(this.publication.publicationId, this.publication)
      .subscribe({
        next: (updatedData) => {
          this.publication = updatedData; // Update local publication with the response
          this.toggleEdit(); // Close edit mode after saving
        },
        error: (err) => {
          console.error('Failed to update publication:', err); // Handle error
        }
      });
  
    }
    this.toggleEdit();  // Close edit mode after saving
  }

  constructor(private publicationService: PublicationService) {}

  deleteCard() {
    if (!this.publication?.publicationId) {
      console.error('Publication ID is missing!');
      return;
    }

    const confirmDelete = confirm('Are you sure you want to delete this publication?');
    if (confirmDelete) {
      this.publicationService.deletePublication(this.publication.publicationId).subscribe(
        () => {
          console.log('Publication deleted successfully');
          // Add additional logic here, e.g., refresh the list or notify the parent component
        },
        (error) => {
          console.error('Error deleting publication:', error);
        }
      );
    }
  }
}
