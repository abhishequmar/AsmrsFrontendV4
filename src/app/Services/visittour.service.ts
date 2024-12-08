import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { VisitorTour } from '../Models/VisitorTour';
@Injectable({
  providedIn: 'root'
})
export class VisittourService {
private apiUrl = 'http://localhost:5081/api/visitortours'; 

  constructor(private http: HttpClient) {}
   token = localStorage.getItem('authToken');  

   headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);


  getAllVisitorTours(): Observable<VisitorTour[]> {
    return this.http.get<VisitorTour[]>(this.apiUrl);
  }

  getVisitorTourById(id: string): Observable<VisitorTour> {
    return this.http.get<VisitorTour>(`${this.apiUrl}/${id}`);
  }

  createVisitorTour(visitorTour: VisitorTour): Observable<VisitorTour> {

    console.log("create called");
    return this.http.post<VisitorTour>(this.apiUrl, visitorTour , { 'headers': this.headers });
  }

  updateVisitorTour(id: string, visitorTour: VisitorTour): Observable<VisitorTour> {
    return this.http.put<VisitorTour>(`${this.apiUrl}/${id}`, visitorTour, { 'headers': this.headers });
  }

  deleteVisitorTour(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`,  { 'headers': this.headers });
  }

  joinTour(tour: VisitorTour, email: string): Observable<{ message: string }> {
    
    return this.http.post<{ message: string }>(`${this.apiUrl}/join`, {
      visitorTour: tour,
      userEmail: email,
    }, { 'headers': this.headers });
  }

  getVisitorToursByVisitorId(visitorId: string): Observable<VisitorTour[]> {
    return this.http.get<VisitorTour[]>(`${this.apiUrl}/visitor/${visitorId}`,  { 'headers': this.headers });
  }

  getVisitorToursByTourGuideId(tourGuideId: string): Observable<VisitorTour[]> {
    return this.http.get<VisitorTour[]>(`${this.apiUrl}/tourguide/${tourGuideId}` , { 'headers': this.headers });
  }
}