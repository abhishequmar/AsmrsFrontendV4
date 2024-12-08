import { Component } from '@angular/core';
import { AuthService } from '../../Services/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {
  isLogin = true;
  email: string = '';
  password: string = '';
  name: string = '';
  role: string = '';
  phone: string = '';
  errorMessage: string = '';
  validationMessages: { [key: string]: string } = {
    email: '',
    password: '',
    name: '',
    role: '',
    phone: ''
  };

  constructor(private authService: AuthService, private router: Router) {}

  // Toggle between login and signup forms
  toggleForm() {
    this.isLogin = !this.isLogin;
    this.errorMessage = ''; // Clear error message when switching forms
    this.clearValidationMessages();
  }

  // Clear validation messages
  clearValidationMessages() {
    this.validationMessages = {
      email: '',
      password: '',
      name: '',
      role: '',
      phone: ''
    };
  }

  // Validate email format
  validateEmail() {
    const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    if (!this.email) {
      this.validationMessages['email'] = 'Email is required';
    } else if (!emailRegex.test(this.email)) {
      this.validationMessages['email'] = 'Invalid email format';
    } else {
      this.validationMessages['email'] = '';
    }
  }

  // Validate phone number format
  validatePhone() {
    const phoneRegex = /^[0-9]{10}$/;
    if (!this.phone) {
      this.validationMessages['phone'] = 'Phone number is required';
    } else if (!phoneRegex.test(this.phone)) {
      this.validationMessages['phone'] = 'Invalid phone number format';
    } else {
      this.validationMessages['phone'] = '';
    }
  }

  // Login user
  login() {
    this.clearValidationMessages();
    if (!this.email || !this.password) {
      this.errorMessage = 'Email and password are required';
      return;
    }

    const credentials = { email: this.email, password: this.password };
    this.authService.login(credentials).subscribe(
      (response) => {
        this.authService.setToken(response.token);
        this.authService.setUserData(response.user);
        this.router.navigate(['/']).then(() => {
          location.reload(); // Refresh the page after navigation
        });
      },
      (error) => {
        this.errorMessage = 'Invalid email or password';
      }
    );
  }

  // Sign up new user
  signup() {
    this.clearValidationMessages();

    if (!this.name || !this.email || !this.password || !this.role || !this.phone) {
      this.errorMessage = 'All fields are required';
      return;
    }

    // Validate email and phone
    this.validateEmail();
    this.validatePhone();

    // If there are validation errors, do not proceed
    if (this.validationMessages['email'] || this.validationMessages['phone']) {
      return;
    }

    const userData = { name: this.name, email: this.email, password: this.password, role: this.role, phone: this.phone };
    this.authService.signup(userData).subscribe(
      (response) => {
        
      },
      (error) => {
        this.errorMessage = 'An error occurred during signup';
      }
    );
    this.toggleForm();
  }
}