import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Artifact } from '../Models/Artifact';

@Injectable({
  providedIn: 'root'
})
export class ArtifactTrackingService {
  private apiUrl = `http://localhost:5081/api/artifacts`; // Update the URL based on your environment settings

  constructor(private http: HttpClient) { }

  // Get all artifacts
  getAllArtifacts(): Observable<Artifact[]> {
    return this.http.get<Artifact[]>(this.apiUrl);
  }

  // Get artifact by ID
  getArtifactById(id: string): Observable<Artifact> {
    return this.http.get<Artifact>(`${this.apiUrl}/${id}`);
  }

  // Create a new artifact
  createArtifact(artifact: Artifact): Observable<Artifact> {
    return this.http.post<Artifact>(this.apiUrl, artifact);
  }

  // Update an existing artifact
  updateArtifact(id: string, artifact: Artifact): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, artifact);
  }

  // Delete an artifact by ID
  deleteArtifact(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  // Get artifacts by site ID
  getArtifactsBySiteId(siteId: string): Observable<Artifact[]> {
    return this.http.get<Artifact[]>(`${this.apiUrl}/site/${siteId}`);
  }

  // Get artifacts by discoveredById
  getArtifactsByDiscoveredById(discoveredById: string): Observable<Artifact[]> {
    return this.http.get<Artifact[]>(`${this.apiUrl}/discoveredBy/${discoveredById}`);
  }
}
