import { Component } from '@angular/core';
import { PublicationService } from '../../Services/publication.service';
import { Publication } from '../../Models/Publication';
import { PublicationcardComponent } from "../../Cards/publicationcard/publicationcard.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-publications',
  standalone: true,
  imports: [PublicationcardComponent, CommonModule, FormsModule],
  templateUrl: './publications.component.html',
  styleUrl: './publications.component.css'
})
export class PublicationsComponent {
publications: Publication[] = [];
  filteredPublications: Publication[] = [];
  authors: string[] = [];
  searchQuery: string = '';
  filterAuthor: string = '';

  constructor(private publicationService: PublicationService) {}

  ngOnInit(): void {
    this.fetchPublications();
  }

  fetchPublications(): void {
    this.publicationService.getAllPublications().subscribe((data: Publication[]) => {
      this.publications = data;
      this.authors = [...new Set(data.map((pub) => pub.authorName))]; // Extract unique authors
      this.filteredPublications = data;
    });
  }

  applyFilters(): void {
    this.filteredPublications = this.publications.filter((pub) => {
      const matchesSearch =
        pub.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        pub.authorName.toLowerCase().includes(this.searchQuery.toLowerCase());
      const matchesAuthor =
        !this.filterAuthor || pub.authorName === this.filterAuthor;

      return matchesSearch && matchesAuthor;
    });
  }
}
