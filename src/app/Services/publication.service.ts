import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Publication } from '../Models/Publication';
@Injectable({
  providedIn: 'root'
})
export class PublicationService {
private apiUrl = 'http://localhost:5081/api/publications'; // Replace with your actual API URL

  constructor(private http: HttpClient) {}
  token = localStorage.getItem('authToken');  

   headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);

  // Get all publications
  getAllPublications(): Observable<Publication[]> {
    return this.http.get<Publication[]>(this.apiUrl);
  }

  // Get a publication by ID
  getPublicationById(id: string): Observable<Publication> {
    return this.http.get<Publication>(`${this.apiUrl}/${id}`, { 'headers': this.headers });
  }

  // Create a new publication
  createPublication(publication: Publication): Observable<Publication> {
    return this.http.post<Publication>(this.apiUrl, publication, { 'headers': this.headers });
  }

  // Update an existing publication
  updatePublication(id: string, publication: Publication): Observable<Publication> {
    console.log("publication update called");
    return this.http.put<Publication>(`${this.apiUrl}/${id}`, publication, { 'headers': this.headers });
  }

  // Delete a publication by ID
  deletePublication(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`, { 'headers': this.headers });
  }

  // Get publications by SiteId
  getPublicationsBySiteId(siteId: string): Observable<Publication[]> {
    return this.http.get<Publication[]>(`${this.apiUrl}/site/${siteId}`, { 'headers': this.headers });
  }
}
