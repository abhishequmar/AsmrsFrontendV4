import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = `http://localhost:5081/api/User`; // Your API endpoint

  constructor(private http: HttpClient) {}
  

  // Signup method
  signup(userData: { name: string; email: string; password: string; role: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, userData);
  }

  // Login method
  login(credentials: { email: string; password: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, credentials);
  }

  // Store JWT token in localStorage
  setToken(token: string): void {
    localStorage.setItem('authToken', token);
  }

  // Store user data in localStorage
  setUserData(userData: any): void {
    localStorage.setItem('user', JSON.stringify(userData));
  }

  // Get the JWT token from localStorage
  getToken(): string | null {
    return localStorage.getItem('authToken');
  }

  // Remove the token from localStorage (logout)
  logout(): void {
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
  }

  // Check if the user is authenticated
  isAuthenticated(): boolean {
    const token = this.getToken();
    return token !== null;
  }

  // Get user details from the JWT token (implement decoding the JWT token if necessary)
  getUserToken(): any {
    const token = this.getToken();
    if (token) {
      const payload = atob(token.split('.')[1]);
      return JSON.parse(payload);
    }
    return null;
  }

  // Get the logged-in user's ID from localStorage
  getLoggedInUserId(): string | null {
    const user = localStorage.getItem('user');
    if (user) {
      const userData = JSON.parse(user);
      return userData?.id || null; // assuming userData contains userId
    }
    return null; // return null if user is not logged in
  }

  getLoggedInUserData(): any | null {
    const user = localStorage.getItem('user');
    if (user) {
      const userData = JSON.parse(user);
      return userData; // assuming userData contains userId
    }
    return null; // return null if user is not logged in
  }
}
