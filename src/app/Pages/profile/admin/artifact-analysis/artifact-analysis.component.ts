import { Component } from '@angular/core';
import { Artifact } from '../../../../Models/Artifact';
import { ArtifactService } from '../../../../Services/artifact.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-artifact-analysis',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './artifact-analysis.component.html',
  styleUrl: './artifact-analysis.component.css'
})
export class ArtifactAnalysisComponent {
  chartData: { label: string; value: number }[] = [];
  maxValue: number = 0;

  constructor(private artifactService: ArtifactService) {}

  ngOnInit(): void {
    this.loadAnalytics();
  }

  loadAnalytics(): void {
    this.artifactService.getAllArtifacts().subscribe((artifacts: Artifact[]) => {
      // Group artifacts by preservationStatus
      const dataMap: { [key: string]: number } = {};
      artifacts.forEach((artifact) => {
        const status = artifact.preservationStatus || 'Unknown';
        dataMap[status] = (dataMap[status] || 0) + 1;
      });

      // Convert data to chart-friendly format and find max value
      this.chartData = Object.keys(dataMap).map((key) => ({
        label: key,
        value: dataMap[key],
      }));
      this.maxValue = Math.max(...this.chartData.map((data) => data.value));
    });
  }
}

