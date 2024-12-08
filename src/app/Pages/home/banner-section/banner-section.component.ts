import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-banner-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './banner-section.component.html',
  styleUrl: './banner-section.component.css'
})
export class BannerSectionComponent {
  slides = [
    'banner1.jpg',
    'banner2.webp',
    'banner3.png'
    // Add more image paths here
  ];
  currentSlide = 0;

  

  ngOnInit() {
    this.startAutoSlide();
  }

  ngOnDestroy() {
    if (this.slideInterval) {
      clearInterval(this.slideInterval);
    }
  }
    private slideInterval: any;


  startAutoSlide() {
    this.slideInterval = setInterval(() => {
      this.nextSlide();
    }, 5000); // Change slide every 5 seconds
  }

  prevSlide() {
    this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }

  setSlide(index: number) {
    this.currentSlide = index;
  }
}
