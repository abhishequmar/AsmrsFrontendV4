import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Excavation } from '../../../Models/Excavation';
import { ExcavationService } from '../../../Services/excavation.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-excavation',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './excavation.component.html',
  styleUrl: './excavation.component.css'
})
export class ExcavationComponent {
  @Input() excavation: Excavation | null = null; // The excavation data to display
  @Output() updateExcavation = new EventEmitter<Excavation>(); // Event emitter for update
  @Output() deleteExcavation = new EventEmitter<string>(); // Event emitter for delete

  // For editing modal
  updatedExcavation: Excavation = {
    excavationId: this.excavation?.excavationId || '',
    siteId: this.excavation?.siteId || '',
    siteName: this.excavation?.siteName || '',
    title: this.excavation?.title || '',
    startDate: this.excavation?.startDate || '',
    endDate: this.excavation?.endDate || '',
    leadArchaeologistId: this.excavation?.leadArchaeologistId || '',
    leadArchaeologistName: this.excavation?.leadArchaeologistName || '',
    status: this.excavation?.status || '',
    teamMembers: this.excavation?.teamMembers || []
  };
  toggleEditModal() {
    const modal = document.getElementById('editModal');
    if (modal) {
      modal.classList.toggle('hidden');
    }
  }

  onSaveUpdated() {
    if (this.updatedExcavation) {
      this.updateExcavation.emit(this.updatedExcavation);
      this.toggleEditModal(); // Hide the modal after saving
    }
  }

  onDelete() {
    if (this.excavation?.excavationId) {
      this.deleteExcavation.emit(this.excavation.excavationId);
    }
  }
}