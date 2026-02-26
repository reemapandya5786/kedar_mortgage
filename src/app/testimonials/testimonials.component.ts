import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  Testimonial,
  TestimonialsDataService,
} from '../core/data/testimonials-data.service';

@Component({
  selector: 'app-testimonials',
  imports: [CommonModule],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss',
})
export class TestimonialsComponent {
  testimonials: Testimonial[] = [];

  constructor(private testimonialsDataService: TestimonialsDataService) {
    this.testimonials = this.testimonialsDataService.getTestimonials();
  }

  getRatingArray(rating: number): number[] {
    const safeRating = Math.min(5, Math.max(0, Math.floor(rating)));
    return Array.from({ length: safeRating }, (_, index) => index);
  }
}
