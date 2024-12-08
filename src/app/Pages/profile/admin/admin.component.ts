import { Component } from '@angular/core';
import { SiteAnalysisComponent } from "./site-analysis/site-analysis.component";
import { ArtifactAnalysisComponent } from "./artifact-analysis/artifact-analysis.component";
import { VisittourAnalysisComponent } from "./visittour-analysis/visittour-analysis.component";

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [SiteAnalysisComponent, ArtifactAnalysisComponent, VisittourAnalysisComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {

}
