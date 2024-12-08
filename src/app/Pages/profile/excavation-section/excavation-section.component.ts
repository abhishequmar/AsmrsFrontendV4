import { Component } from '@angular/core';
import { Excavation } from '../../../Models/Excavation';
import { ExcavationService } from '../../../Services/excavation.service';
import { AuthService } from '../../../Services/auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SiteService } from '../../../Services/site.service';
import { Site } from '../../../Models/Site';

@Component({
  selector: 'app-excavation-section',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './excavation-section.component.html',
  styleUrl: './excavation-section.component.css'
})
export class ExcavationSectionComponent {
  excavationToEdit: Excavation = {
    excavationId: '',  // Default to empty string or a default ID value
    siteId: '',  // Default to empty string or default site ID
    siteName: '',  // Default to empty string or a default site name
    title: '',  // Default to empty string
    startDate: '',  // Default to empty string or some date in ISO format, e.g., '2024-01-01'
    endDate: '',  // Default to empty string or null if optional
    leadArchaeologistId: '',  // Default to empty string or a default user ID
    leadArchaeologistName: '',  // Default to empty string or the archaeologist's name
    status: ''  // Default to empty string,
    ,teamMembers : []
  };  

  sites: Site[] = []; // List of sites fetched from the backend
  excavations: Excavation[] = []; // List of existing excavations
  newExcavation: Excavation = {
    excavationId: '',  // Default to empty string or a default ID value
    siteId: '',  // Default to empty string or default site ID
    siteName: '',  // Default to empty string or a default site name
    title: '',  // Default to empty string
    startDate: '',  // Default to empty string or some date in ISO format, e.g., '2024-01-01'
    endDate: '',  // Default to empty string or null if optional
    leadArchaeologistId: '',  // Default to empty string or a default user ID
    leadArchaeologistName: '',  // Default to empty string or the archaeologist's name
    status: ''  // Default to empty string,
    ,teamMembers : []
  };  
  isAddMode: boolean = false; // Flag to toggle add excavation form
  isEditMode: boolean = false; // Flag to toggle update modal


  constructor(private siteService: SiteService, private excavationService: ExcavationService, private authService: AuthService) {}

  ngOnInit(): void {
    this.loadSites();
    this.loadExcavations();
  }

  // Fetch all sites from the backend
  loadSites(): void {
    this.siteService.getAllSites().subscribe((sites) => {
      this.sites = sites;
    });
  }

  // Fetch all excavations from the backend
  loadExcavations(): void {
    this.excavationService.getAllExcavations().subscribe((excavations) => {
      this.excavations = excavations;
    });
  }

  // Toggle add excavation form
  toggleAddExcavation(): void {
    this.isAddMode = !this.isAddMode;
    this.newExcavation =  {
      siteId: '',
  title: '',
  startDate: new Date().toISOString().split('T')[0], // Default to today's date in YYYY-MM-DD format
  endDate: '',
  status: '',
  leadArchaeologistId: this.authService.getLoggedInUserId()||"",
  leadArchaeologistName: this.authService.getLoggedInUserData.name,
  siteName: "",
  teamMembers:[],
  excavationId: ' '
    };
  }

  // Add a new excavation
  addExcavation(): void {
    this.excavationService.createExcavation(this.newExcavation).subscribe(
      (excavation) => {
        this.excavations.push(excavation); // Add to the list of excavations
        this.toggleAddExcavation(); // Close the form
      },
      (error) => {
        console.error('Error adding excavation', error);
      }
    );
  }

  // Open edit modal and load excavation data
  openEditModal(excavation: Excavation): void {
    this.excavationToEdit = { ...excavation }; // Copy excavation data to avoid modifying the original list directly
    this.isEditMode = true; // Show the edit modal
  }
  // Update excavation
    // Update the excavation
    updateExcavation(): void {
      if (this.excavationToEdit) {
        this.excavationService.updateExcavation(this.excavationToEdit.excavationId, this.excavationToEdit).subscribe(
          (updatedExcavation) => {
            // Update the excavation in the list
            const index = this.excavations.findIndex(e => e.excavationId === updatedExcavation.excavationId);
            if (index !== -1) {
              this.excavations[index] = updatedExcavation;
            }
            this.closeEditModal(); // Close the modal after successful update
          },
          (error) => {
            console.error('Error updating excavation', error);
          }
        );
      }
    }

    // Close the edit modal
  closeEditModal(): void {
    this.isEditMode = false;
    this.excavationToEdit  =  {
      siteId: '',
  title: '',
  startDate: new Date().toISOString().split('T')[0], // Default to today's date in YYYY-MM-DD format
  endDate: '',
  status: '',
  leadArchaeologistId: this.authService.getLoggedInUserId()||"",
  leadArchaeologistName: this.authService.getLoggedInUserData.name,
  siteName: "",
  teamMembers:[],
  excavationId: ' '
    };
  }

  // Delete excavation
  deleteExcavation(excavationId: string): void {
    this.excavationService.deleteExcavation(excavationId).subscribe(
      () => {
        this.excavations = this.excavations.filter((excavation) => excavation.excavationId !== excavationId);
      },
      (error) => {
        console.error('Error deleting excavation', error);
      }
    );
  }
}