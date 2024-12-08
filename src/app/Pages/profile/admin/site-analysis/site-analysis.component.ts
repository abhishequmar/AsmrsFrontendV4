import { Component } from '@angular/core';
import { Site } from '../../../../Models/Site';
import { SiteService } from '../../../../Services/site.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-site-analysis',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './site-analysis.component.html',
  styleUrl: './site-analysis.component.css'
})
export class SiteAnalysisComponent {
  chartData: { label: string; value: number }[] = [];
  maxValue = 0;

  constructor(private siteService: SiteService) {}

  ngOnInit(): void {
    this.loadAnalytics();
  }

  loadAnalytics(): void {
    this.siteService.getAllSites().subscribe((sites: Site[]) => {
      // Group data by conservationStatus
      const dataMap: { [key: string]: number } = {};
      sites.forEach((site) => {
        const status = site.conservationStatus || 'Unknown';
        dataMap[status] = (dataMap[status] || 0) + 1;
      });

      // Convert data to an array and find the maximum value
      this.chartData = Object.keys(dataMap).map((key) => ({
        label: key,
        value: dataMap[key],
      }));
      this.maxValue = Math.max(...this.chartData.map((data) => data.value));
    });
  }
}
