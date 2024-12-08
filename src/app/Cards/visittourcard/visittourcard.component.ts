import { Component, Input } from '@angular/core';
import { VisitorTour } from '../../Models/VisitorTour';
import { VisittourService } from '../../Services/visittour.service';
import { AuthService } from '../../Services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-visittourcard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './visittourcard.component.html',
  styleUrl: './visittourcard.component.css'
})
export class VisittourcardComponent {
  @Input() visitorTour!: VisitorTour; // Input for the tour data
  @Input() currentUserId!: string; // Input for the current user ID
  isJoined: boolean = false; // Whether the user is already joined

  constructor(private visitorTourService: VisittourService, private authService: AuthService) {}

  ngOnInit(): void {
    this.checkIfJoined();
  }

  // Check if the user is joined in the tour
  checkIfJoined(): void {
    this.isJoined = this.visitorTour.visitorIds?.includes(this.currentUserId) || false;
  }

  // Join the tour
  // joinTour(): void {
  //   if (!this.isJoined) {
  //     const userEmail = this.authService.getLoggedInUserData().email; // Get logged-in user's email

  //     this.visitorTourService.joinTour(this.visitorTour, userEmail).subscribe(
  //       (response) => {
  //         this.visitorTour.visitorIds.push(this.currentUserId); // Add the user ID
  //         this.isJoined = true; // Update the joined status
  //       },
  //       (error) => {
  //         alert(error.error.message || 'An error occurred while joining the tour.');
  //       }
  //     );
  //   }
  // }
   // Join the tour
   joinTour(): void {
      if (!this.isJoined) {
        const userEmail = this.authService.getLoggedInUserData().email; 

        // Call the joinTour service function
        this.visitorTourService.joinTour(this.visitorTour, userEmail).subscribe(
          (response) => {
            // If successful, update the joined status
            this.isJoined = true; 
          },
          
        );
      
      this.visitorTour.visitorIds.push(this.authService.getLoggedInUserId());
      this.visitorTourService.updateVisitorTour(this.visitorTour.tourId, this.visitorTour).subscribe(
        (response) => {
          this.isJoined = true; // Update the joined status
        },
        (error) => {
          alert(error.error.message || 'An error occurred while joining the tour.');
        }
      );
    }
  }

  // Leave the tour
  leaveTour(): void {
    if (this.isJoined) {
      this.visitorTour.visitorIds = this.visitorTour.visitorIds.filter(id => id !== this.currentUserId); // Remove the user ID
      this.visitorTourService.updateVisitorTour(this.visitorTour.tourId, this.visitorTour).subscribe(
        (response) => {
          this.isJoined = false; // Update the joined status
        },
        (error) => {
          alert(error.error.message || 'An error occurred while leaving the tour.');
        }
      );
    }
  }
}