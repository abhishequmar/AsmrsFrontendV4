import { Component } from '@angular/core';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [],
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})
export class MapComponent {
  mapUrl: string = 'https://www.google.com/maps/d/edit?mid=1TCvk8iPmPdlrketnEEGvFD1AGudHc0o&usp=sharing';

}
