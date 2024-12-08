import { Component } from '@angular/core';
import { ConservationProject } from '../../../Models/ConservationProject';
import { ConservationProjectService } from '../../../Services/conservation-project.service';
import { AuthService } from '../../../Services/auth.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ConservationprojectComponent } from "../../../Cards/Editable/conservationproject/conservationproject.component";
import { SiteService } from '../../../Services/site.service';

@Component({
  selector: 'app-conservator',
  standalone: true,
  imports: [FormsModule, CommonModule, ConservationprojectComponent],
  templateUrl: './conservator.component.html',
  styleUrl: './conservator.component.css'
})
export class ConservatorComponent {

  availableSites: { siteId: string; name: string }[] = [];

  projects: ConservationProject[] = [];
  newProject: ConservationProject = {
    projectId: " ",
    siteId: " ",
    siteName: "random",
    objective: '',
    conservationMethod: '',
    startDate: '',
    fundingSource: '',
    leaderId: this.authService.getLoggedInUserId() || "",
    contributorIds: [this.authService.getLoggedInUserId()||""]
  };
  isAddModalOpen: boolean = false;

  constructor(private conservationProjectService: ConservationProjectService, private siteService: SiteService, private authService: AuthService) {}

  ngOnInit(): void {
    // Fetch projects for the logged-in user
    this.fetchUserProjects();
    this.siteService.getAllSites().subscribe((sites) => {
      this.availableSites = sites.map(site => ({
        siteId: site.siteId, // Convert to number
        name: site.name,
      }));
    });
  }

  fetchUserProjects(): void {
    // Assuming the logged-in user has an ID, replace with actual logic to get the user ID
    const userId = this.authService.getLoggedInUserId() || "";
    this.conservationProjectService.getProjectsByContributorId(userId).subscribe((projects) => {
      this.projects = projects;
    });
  }

  openAddProjectModal(): void {
    this.isAddModalOpen = true;
  }

  closeAddModal(): void {
    this.isAddModalOpen = false;
  }

  addProject(): void {
    console.log("add project");
    
    this.newProject.siteName =  this.assignSiteNameById(this.newProject.siteId);
    console.log(this.newProject.siteId);
    console.log(this.newProject.siteName);
    
    // console.log(this.newProject);
    

    this.conservationProjectService.createConservationProject(this.newProject).subscribe((project) => {
      this.projects.push(project); // Add the new project to the list
      this.closeAddModal(); // Close the modal after adding
    });
  }

  assignSiteNameById(siteId: string): string {
    console.log(siteId, "siteId");
    var selectedSite = this.availableSites.find(site => site.siteId == siteId)?.name;
    console.log(selectedSite);
    return selectedSite ||"";
  }
}