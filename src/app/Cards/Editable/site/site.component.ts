import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SiteService } from '../../../Services/site.service';
import { Site } from '../../../Models/Site';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-site',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './site.component.html',
  styleUrl: './site.component.css'
})
export class SiteComponent {
  @Input() site!: Site;  // Site data to be passed into the component
  @Output() edit = new EventEmitter<Site>();  // Event emitter for the edit action
  @Output() delete = new EventEmitter<string>();  // Event emitter for the delete action

  deleteModalOpen = false;

  onEdit() {
    this.edit.emit(this.site);  // Emit the edit event
  }

  toggleDeleteModal(){
    this.deleteModalOpen= !this.deleteModalOpen;
  }

  onDelete() {
    console.log("card delete called");
    if(this.site.siteId != null){
      this.delete.emit(this.site.siteId);
    }
    this.toggleDeleteModal();
      // Emit the delete event
  }
}