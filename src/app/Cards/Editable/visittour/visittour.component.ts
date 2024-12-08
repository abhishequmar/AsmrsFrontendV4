import { Component, EventEmitter, Input, Output } from '@angular/core';
import { VisitorTour } from '../../../Models/VisitorTour';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-visittour',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './visittour.component.html',
  styleUrl: './visittour.component.css'
})
export class VisittourComponent {
@Input() tour!: VisitorTour;
  @Output() deleteTour = new EventEmitter<string>();
  @Output() udpateTour = new EventEmitter<VisitorTour>();
  deleteModalOpen = false;

  constructor() {}

  // Emit the event to delete the tour
  onDeleteTour(): void {
    this.deleteTour.emit(this.tour.tourId);
    this.toggleDeleteModal();
  }

  // Open update modal or logic can be added for updating tour
  onUpdateTour(): void {
    console.log("update called");
    this.udpateTour.emit(this.tour);
  }

  toggleDeleteModal(){
    this.deleteModalOpen= !this.deleteModalOpen;
  }

  
}
