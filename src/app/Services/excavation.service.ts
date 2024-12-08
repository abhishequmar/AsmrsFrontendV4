import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Excavation } from '../Models/Excavation';

@Injectable({
  providedIn: 'root'
})
export class ExcavationService {

  private apiUrl = 'http://localhost:5081/api/excavations';  // Replace with your actual API endpoint

  constructor(private http: HttpClient) { }
  token = localStorage.getItem('authToken');  

   headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);

  // Get all excavations
  getAllExcavations(): Observable<Excavation[]> {
    return this.http.get<Excavation[]>(this.apiUrl);
  }

  // Get excavation by ID
  getExcavationById(id: string): Observable<Excavation> {
    return this.http.get<Excavation>(`${this.apiUrl}/${id}`, { 'headers': this.headers });
  }

  // Create new excavation
  createExcavation(excavation: Excavation): Observable<Excavation> {
    return this.http.post<Excavation>(this.apiUrl, excavation, { 'headers': this.headers });
  }

  // Update excavation by ID
  updateExcavation(id: string, excavation: Excavation): Observable<Excavation> {
    return this.http.put<Excavation>(`${this.apiUrl}/${id}`, excavation, { 'headers': this.headers });
  }

  // Delete excavation by ID
  deleteExcavation(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`, { 'headers': this.headers });
  }

  // Get excavations by Lead Archaeologist
  getExcavationsByLeadArchaeologist(leadArchaeologistId: string): Observable<Excavation[]> {
    return this.http.get<Excavation[]>(`${this.apiUrl}/lead/${leadArchaeologistId}`, { 'headers': this.headers });
  }
}
