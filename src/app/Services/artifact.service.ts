import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Artifact } from '../Models/Artifact';

@Injectable({
  providedIn: 'root'
})
export class ArtifactService {

  private baseUrl = 'http://localhost:5081/api/artifacts'; // Base URL for the API endpoint

  constructor(private http: HttpClient) {}

  // Fetch all artifacts
  getAllArtifacts(): Observable<Artifact[]> {
    return this.http.get<Artifact[]>(`${this.baseUrl}`);
  }

  // Fetch artifact by ID
  getArtifactById(id: string): Observable<Artifact> {
    return this.http.get<Artifact>(`${this.baseUrl}/${id}`);
  }

  // Create a new artifact
  createArtifact(artifact: Artifact): Observable<Artifact> {
    return this.http.post<Artifact>(`${this.baseUrl}`, artifact);
  }

  // Update an existing artifact
  updateArtifact(id: string, artifact: Artifact): Observable<void> {
    console.log("id", id);
    console.log("car", artifact);
    return this.http.put<void>(`${this.baseUrl}/${artifact.artifactId}`, artifact);
  }

  // Delete an artifact by ID
  deleteArtifact(id: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

  // Fetch artifacts by site ID
  getArtifactsBySiteId(siteId: string): Observable<Artifact[]> {
    return this.http.get<Artifact[]>(`${this.baseUrl}/site/${siteId}`);
  }
}
