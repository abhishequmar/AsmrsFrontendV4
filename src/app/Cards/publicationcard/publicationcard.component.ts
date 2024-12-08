import { Component , Input} from '@angular/core';
import { Publication } from '../../Models/Publication';

@Component({
  selector: 'app-publicationcard',
  standalone: true,
  imports: [],
  templateUrl: './publicationcard.component.html',
  styleUrl: './publicationcard.component.css'
})
export class PublicationcardComponent {
@Input() publication!: Publication;
}
