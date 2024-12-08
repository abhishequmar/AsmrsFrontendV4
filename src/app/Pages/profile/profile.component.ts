import { Component } from '@angular/core';
import { VisitorComponent } from "./visitor/visitor.component";
import { TourguideComponent } from "./tourguide/tourguide.component";
import { ConservatorComponent } from "./conservator/conservator.component";
import { ArchaeologistComponent } from "./archaeologist/archaeologist.component";
import { ResearcherComponent } from "./researcher/researcher.component";
import { AuthService } from '../../Services/auth.service';
import { AdminComponent } from "./admin/admin.component";
import { CommonModule } from '@angular/common';
import { ExcavationComponent } from "../../Cards/Editable/excavation/excavation.component";
import { ExcavationSectionComponent } from "./excavation-section/excavation-section.component";

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [VisitorComponent,
    TourguideComponent,
    ConservatorComponent,
    ArchaeologistComponent,
    ResearcherComponent,
    AdminComponent,
    CommonModule, ExcavationComponent, ExcavationSectionComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

  userName = this.authService.getLoggedInUserData().name;
  userRole = this.authService.getLoggedInUserData().role;
  userEmail = this.authService.getLoggedInUserData().email;

isAdmin: boolean = false;
isArchaeologist: boolean = false;
isConservator: boolean = false;
isVisitor: boolean = false;
isTourguide: boolean = false;
isResearcher: boolean = false;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.checkAdminRole();
  }

  checkAdminRole(): void {
    const user = this.authService.getLoggedInUserData(); // Get user details from the token
    if (user && user.role === 'Admin') {
      console.log("admin");
      this.isAdmin = true;
    } else if (user && user.role === 'Archaeologist') {
      console.log("Archaeologist");
      this.isArchaeologist = true;
    } else if (user && user.role === 'Conservator') {
      console.log("Conservator");
      this.isConservator = true;
    } else if (user && user.role === 'Visitor') {
      console.log("Visitor");
      this.isVisitor = true;
    } else if (user && user.role === 'Tourguide') {
      console.log("Tourguide");
      this.isTourguide = true;
    } else if (user && user.role === 'Researcher') {
      console.log("Researcher");
      this.isResearcher = true;
    } 
  }
}
