import { Component, EventEmitter, Input, Output } from '@angular/core';
import { VisitorTour } from '../../../Models/VisitorTour';
import { VisittourComponent } from "../../../Cards/Editable/visittour/visittour.component";
import { CommonModule } from '@angular/common';
import { VisittourService } from '../../../Services/visittour.service';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SiteService } from '../../../Services/site.service';
import { AuthService } from '../../../Services/auth.service';
import { Site } from '../../../Models/Site';

@Component({
  selector: 'app-tourguide',
  standalone: true,
  imports: [ VisittourComponent, CommonModule, FormsModule],
  templateUrl: './tourguide.component.html',
  styleUrl: './tourguide.component.css'
})
export class TourguideComponent {
guideId: string = "";
  tours: VisitorTour[] = [];
  availableSites: Site[] = []; // Array to hold available sites
  isModalOpen: boolean = false;
  isEditMode: boolean = false;
  tourForm: VisitorTour = {
    tourId: '',
    siteId:'',
    tourGuideId: this.authService.getLoggedInUserId() || "",
    date: '',
    time: '',
    capacity: 0,
    duration: '',
    description: '',
    bookingStatus: 'Open',
    imageUrl: '',
    siteName: '123123',
    visitorIds: []
  };

  constructor(
    private tourGuideService: VisittourService,
    private siteService: SiteService, // Injecting the SiteService
    private route: ActivatedRoute,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    // Get the guideId from local storage
    const storedGuideId = localStorage.getItem('tourGuideId');
    if (storedGuideId) {
      this.tourForm.tourGuideId = this.authService.getLoggedInUserId() || "";  // Set the tourGuideId from localStorage
    }

    // Fetch available sites from the backend
    this.siteService.getAllSites().subscribe(sites => {
      this.availableSites = sites;
    });

    this.guideId = this.authService.getLoggedInUserId() ||"";

    // Fetch all tours of this guide from the backend (if applicable)
    this.tourGuideService.getVisitorToursByTourGuideId(this.guideId).subscribe(tours => {
      this.tours = tours;
    });
  }

  updateSiteName() {
    const selectedSite = this.availableSites.find(site => site.siteId == this.tourForm.siteId);
    this.tourForm.siteName =  selectedSite?.name  || "";
  }

  openTourModal(): void {
    this.isModalOpen = true;
    this.isEditMode = false;
    this.tourForm = {
      tourId: '',
      siteId: '',
      tourGuideId: this.tourForm.tourGuideId, // Tour Guide ID taken from localStorage
      date: '',
      time: '',
      capacity: 0,
      duration: '',
      description: '',
      bookingStatus: 'Open',
      imageUrl: '',
      siteName: '',
      visitorIds: []
    };
  }
  openTourModalforEdit(tour: VisitorTour): void {
    console.log("open modal for edit");
    this.isModalOpen = true;
    this.isEditMode = true;
    this.tourForm = tour;
  }

  closeTourModal(): void {
    this.isModalOpen = false;
  }

  onSubmit(): void {
    this.updateSiteName();
    if (this.isEditMode) {
      this.tourGuideService.updateVisitorTour(this.tourForm.tourId, this.tourForm).subscribe(() => {
        this.closeTourModal();
      });
    } else {
      this.tourGuideService.createVisitorTour(this.tourForm).subscribe(() => {
        this.closeTourModal();
      });
    }
  }

  // Method to delete the tour
  onDeleteTour(tourId: string): void {
    console.log("delete called");
    console.log(tourId);
    this.tourGuideService.deleteVisitorTour(tourId).subscribe(() => {
      this.tours = this.tours.filter(tour => tour.tourId !== tourId);
    });
  }

  // Method to handle update event from VisittourComponent
  onUpdateTour(tour: VisitorTour): void {
    console.log("on update called");
    this.openTourModalforEdit(tour);
    
    
  }

  
}