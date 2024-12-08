import { Injectable } from '@angular/core';
import { Site } from '../Models/Site';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SiteService {
private apiUrl = 'http://localhost:5081/api/Sites'; // Replace with your backend URL

  constructor(private http: HttpClient) {}
  token = localStorage.getItem('authToken');  

   headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);

  // Fetch all sites
  getAllSites(): Observable<Site[]> {
    return this.http.get<Site[]>(this.apiUrl);
  }

  // Fetch a single site by ID
  getSiteById(id: string): Observable<Site> {
    return this.http.get<Site>(`${this.apiUrl}/${id}`);
  }

  // Create a new site
  createSite(site: Site): Observable<Site> {
    return this.http.post<Site>(this.apiUrl, site, { 'headers': this.headers });
  }

  // Update an existing site
  updateSite(id: string, site: Site): Observable<void> {
  
    return this.http.put<void>(`${this.apiUrl}/${site.siteId}`, site, { 'headers': this.headers });
  }

  // Delete a site
  deleteSite(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`, { 'headers': this.headers });
  }

  getSiteByDiscoveredById(discoveredById: string): Observable<Site[]> {
    return this.http.get<Site[]>(`${this.apiUrl}/GetByDiscoveredBy/${discoveredById}`, { 'headers': this.headers });
  }
}
