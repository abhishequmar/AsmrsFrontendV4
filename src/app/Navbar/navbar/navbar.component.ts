import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {  HostListener, OnInit } from '@angular/core';
import { AuthService } from '../../Services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  mobileMenuOpen = false;
  avatarDropdownOpen = false;

  constructor(private authService: AuthService,  private router: Router) {}
  isUserLoggedIn = false;
  ngOnInit() {
    this.isUserLoggedIn = this.isLoggedIn();
    
    
  }

  // Check if the user is logged in
  isLoggedIn(): boolean {
    return localStorage.getItem('authToken')!=null;  // Assuming `isLoggedIn` returns a boolean
  }

  // Toggle mobile menu
  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  // Toggle avatar dropdown
  toggleAvatarDropdown() {
    this.avatarDropdownOpen = !this.avatarDropdownOpen;
  }

  // Close avatar dropdown when clicking outside
  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent) {
    const dropdown = document.querySelector('.relative');
    if (dropdown && !dropdown.contains(event.target as Node)) {
      this.avatarDropdownOpen = false;
    }
  }

  signOut(){
    console.log("singout called");
    this.authService.logout();
    this.router.navigate(['/home']);
    this.toggleAvatarDropdown();
    window.location.reload();
  }
}
