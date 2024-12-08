import { Component } from '@angular/core';
import { MapComponent } from "./map/map.component";
import { BannerSectionComponent } from "./banner-section/banner-section.component";
import { InfoSectionComponent } from "../home/info-section/info-section.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MapComponent, BannerSectionComponent, InfoSectionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
