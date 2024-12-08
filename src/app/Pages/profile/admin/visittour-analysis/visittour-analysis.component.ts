import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { VisitorTour } from '../../../../Models/VisitorTour';
import { VisittourService } from '../../../../Services/visittour.service';

@Component({
  selector: 'app-visittour-analysis',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './visittour-analysis.component.html',
  styleUrl: './visittour-analysis.component.css'
})
export class VisittourAnalysisComponent {
  barChartData: any[] = [];
  pieChartData: any[] = [];
  maxCapacity: number = 100; // Example max capacity

  constructor(private visittourService: VisittourService) {}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    // Fetch data from service
    this.visittourService.getAllVisitorTours().subscribe((data: any) => {
      this.barChartData = data.map((tour: any) => ({
        label: tour.name,  // Adjust based on your actual data properties
        value: tour.visitors // Adjust based on your actual data properties
      }));

      // You can also create the pie chart data if it's different
      this.pieChartData = [
        { label: 'Booked', value: 60 },
        { label: 'Available', value: 30 },
        { label: 'Pending', value: 10 },
      ];
    });
  }

  // Get color based on the status
  getPieColor(label: string): string {
    const colorMap: { [key: string]: string } = {
      'Booked': '#28a745',   // Green color
      'Available': '#ffc107', // Yellow color
      'Pending': '#dc3545',   // Red color
    };
    return colorMap[label] || '#6c757d'; // Default to gray if no match
  }
  
  // Get stroke-dasharray for pie chart segments
  getPieStrokeDasharray(value: number): string {
    const total = this.pieChartData.reduce((acc, data) => acc + data.value, 0);
    const percentage = (value / total) * 100;
    return `${percentage} ${100 - percentage}`;
  }

  // Get stroke-dashoffset for pie chart segments
  getPieStrokeDashoffset(label: string): number {
    const total = this.pieChartData.reduce((acc, data) => acc + data.value, 0);
    let offset = 0;
    this.pieChartData.forEach(data => {
      if (data.label === label) {
        return;
      }
      const percentage = (data.value / total) * 100;
      offset += percentage;
    });
    return offset;
  }

  getLabelPositionX(data: any): number {
    const total = this.pieChartData.reduce((acc, data) => acc + data.value, 0);
    const percentage = (data.value / total) * 100;
    const angle = (percentage / 100) * 360;  // Convert percentage to angle
  
    // Convert polar coordinates (angle) to Cartesian coordinates (x)
    const radius = 15.91549431;  // Pie radius
    const x = 18 + radius * Math.cos((angle - 90) * Math.PI / 180);  // Convert to Cartesian
    return x;
  }
  
  getLabelPositionY(data: any): number {
    const total = this.pieChartData.reduce((acc, data) => acc + data.value, 0);
    const percentage = (data.value / total) * 100;
    const angle = (percentage / 100) * 360;  // Convert percentage to angle
  
    // Convert polar coordinates (angle) to Cartesian coordinates (y)
    const radius = 15.91549431;  // Pie radius
    const y = 18 + radius * Math.sin((angle - 90) * Math.PI / 180);  // Convert to Cartesian
    return y;
  }
}