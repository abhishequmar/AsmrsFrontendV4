import { Component } from '@angular/core';
import { VisitorTour } from '../../Models/VisitorTour';
import { VisittourService } from '../../Services/visittour.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { VisittourcardComponent } from "../../Cards/visittourcard/visittourcard.component";
import { AuthService } from '../../Services/auth.service';

@Component({
  selector: 'app-tours',
  standalone: true,
  imports: [FormsModule, CommonModule, VisittourcardComponent],
  templateUrl: './tours.component.html',
  styleUrl: './tours.component.css'
})
export class ToursComponent {
visitorTours: VisitorTour[] = []; // All tours
  filteredTours: VisitorTour[] = []; // Tours after filtering
  searchQuery: string = ''; // Search input
  dateFilter: string = ''; // Date filter input
  currentUserId: string = this.authService.getLoggedInUserId()||""; // Current logged-in user ID

  constructor(private visitorTourService: VisittourService, private authService: AuthService) {}

  ngOnInit(): void {
    this.loadTours();
  }

  // Load all tours from the service
  loadTours(): void {
    this.visitorTourService.getAllVisitorTours().subscribe(
      (tours) => {
        this.visitorTours = tours.filter((tour) => tour.tourGuideId!=this.currentUserId);
        this.filteredTours = tours;
      },
      (error) => {
        alert('Error loading tours');
      }
    );
  }

  // Filter tours based on search query and date
  filterTours(): void {
    const query = this.searchQuery.toLowerCase();
    this.filteredTours = this.visitorTours.filter(
      (tour) =>
        tour.siteName.toLowerCase().includes(query) &&
        (this.dateFilter ? tour.date === this.dateFilter : true)
    );
  }
}
