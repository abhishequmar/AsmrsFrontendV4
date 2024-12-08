import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ConservationProject } from '../../../Models/ConservationProject';
import { ConservationProjectService } from '../../../Services/conservation-project.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-conservationproject',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './conservationproject.component.html',
  styleUrl: './conservationproject.component.css',
  
})
export class ConservationprojectComponent {
@Input() project!: ConservationProject;
  isModalOpen: boolean = false;

  constructor(private conservationProjectService: ConservationProjectService) {}

  // Open the modal
  openUpdateModal(): void {
    this.isModalOpen = true;
  }

  // Close the modal
  closeModal(): void {
    this.isModalOpen = false;
  }

  // Save the changes made in the modal
  saveChanges(): void {
    this.conservationProjectService.updateConservationProject(this.project.projectId, this.project).subscribe(() => {
      this.closeModal(); // Close the modal after saving changes
    });
  }

  // Delete the conservation project
  deleteProject(): void {
      this.conservationProjectService.deleteConservationProject(this.project.projectId).subscribe(() => {
      });
      this.toggleDeleteModal();
    
  }

  deleteModalOpen =false;

  toggleDeleteModal(){
    this.deleteModalOpen= !this.deleteModalOpen;
  }
}