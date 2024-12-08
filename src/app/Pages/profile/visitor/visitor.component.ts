import { Component } from '@angular/core';
import { VisittourService } from '../../../Services/visittour.service';
import { VisitorTour } from '../../../Models/VisitorTour';
import { VisittourcardComponent } from "../../../Cards/visittourcard/visittourcard.component";
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../Services/auth.service';

@Component({
  selector: 'app-visitor',
  standalone: true,
  imports: [VisittourcardComponent, CommonModule],
  templateUrl: './visitor.component.html',
  styleUrl: './visitor.component.css'
})
export class VisitorComponent {
  userId: string= "";
userVisitTours: VisitorTour[] = [];
currentUserId = this.authService.getLoggedInUserId() ||"";

  constructor(private visittourService: VisittourService, private authService: AuthService) {}

  ngOnInit(): void {
    // Assuming the logged-in user's ID is available (replace with actual logic to get logged-in user)
     this.userId = this.authService.getLoggedInUserId() ||"" ; // Replace this with the actual logged-in user ID

    this.visittourService.getVisitorToursByVisitorId(this.userId).subscribe(
      (data) => {
        this.userVisitTours = data;
      },
      (error) => {
        console.error('Error fetching user visit tours:', error);
      }
    );
  }
}
