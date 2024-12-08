import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConservationProject } from '../Models/ConservationProject';

@Injectable({
  providedIn: 'root'
})
export class ConservationProjectService {
private apiUrl = `http://localhost:5081/api/ConservationProjects`; // API base URL

  constructor(private http: HttpClient) { }

  // Get all conservation projects
  getAllConservationProjects(): Observable<ConservationProject[]> {
    return this.http.get<ConservationProject[]>(`${this.apiUrl}`);
  }

  // Get a conservation project by ID
  getConservationProjectById(id: string): Observable<ConservationProject> {
    return this.http.get<ConservationProject>(`${this.apiUrl}/${id}`);
  }

  // Create a new conservation project
  createConservationProject(conservationProject: ConservationProject): Observable<ConservationProject> {
    return this.http.post<ConservationProject>(`${this.apiUrl}`, conservationProject);
  }

  // Update an existing conservation project
  updateConservationProject(id: string, conservationProject: ConservationProject): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, conservationProject);
  }

  // Delete a conservation project
  deleteConservationProject(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  // Get conservation projects by contributor ID
  getProjectsByContributorId(contributorId: string): Observable<ConservationProject[]> {
    return this.http.get<ConservationProject[]>(`${this.apiUrl}/contributor/${contributorId}`);
  }
}
