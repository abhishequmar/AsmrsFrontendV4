import { Component, Input } from '@angular/core';
import { Site } from '../../Models/Site';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sitecard',
  standalone: true,
  imports: [],
  templateUrl: './sitecard.component.html',
  styleUrl: './sitecard.component.css'
})
export class SitecardComponent {
@Input() site!: Site;

  constructor(private router: Router) {}

  // Navigate to the site detail page when the card is clicked
  onSiteClick() {
    this.router.navigate(['/site', this.site.siteId]);
  }
}
