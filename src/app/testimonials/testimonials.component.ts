import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Testimonial {
  id: number;
  name: string;
  location: string;
  rating: number;
  date: string;
  text: string;
  loanType: string;
  image?: string;
}

@Component({
  selector: 'app-testimonials',
  imports: [CommonModule],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss',
})
export class TestimonialsComponent {
  testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Sarah Johnson',
      location: 'Austin, TX',
      rating: 5,
      date: 'January 2026',
      loanType: 'First-Time Homebuyer',
      text: "Working with Kedar Mortgage was an absolute pleasure! As a first-time homebuyer, I was nervous about the process, but the team made everything so easy to understand. They were patient, responsive, and helped me secure an amazing rate. I couldn't be happier with my new home!",
      image: 'assets/testimonials/placeholder.jpg',
    },
    {
      id: 2,
      name: 'Michael Chen',
      location: 'San Francisco, CA',
      rating: 5,
      date: 'December 2025',
      loanType: 'Refinance',
      text: 'I refinanced my mortgage with Kedar Mortgage and saved hundreds of dollars every month. The process was incredibly smooth and faster than I expected. The team kept me informed every step of the way. Highly recommend their services!',
      image: 'assets/testimonials/placeholder.jpg',
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      location: 'Denver, CO',
      rating: 5,
      date: 'November 2025',
      loanType: 'Conventional Loan',
      text: 'Exceptional service from start to finish! The mortgage experts at Kedar really know their stuff. They found me the perfect loan product and got me a competitive rate. The closing process was seamless. Thank you for making my dream home a reality!',
      image: 'assets/testimonials/placeholder.jpg',
    },
    {
      id: 4,
      name: 'David Thompson',
      location: 'Seattle, WA',
      rating: 5,
      date: 'October 2025',
      loanType: 'VA Loan',
      text: "As a veteran, I was looking for the best VA loan options. Kedar Mortgage not only found me a great rate but also made sure I understood all my benefits. Their expertise and commitment to veterans is outstanding. Couldn't ask for better service!",
      image: 'assets/testimonials/placeholder.jpg',
    },
    {
      id: 5,
      name: 'Jessica Martinez',
      location: 'Miami, FL',
      rating: 5,
      date: 'September 2025',
      loanType: 'Jumbo Loan',
      text: 'Professional, knowledgeable, and incredibly helpful. The team handled my jumbo loan with expertise and efficiency. They were always available to answer my questions and made what could have been a complex process very straightforward. Highly recommended!',
      image: 'assets/testimonials/placeholder.jpg',
    },
    {
      id: 6,
      name: 'Robert Williams',
      location: 'Boston, MA',
      rating: 5,
      date: 'August 2025',
      loanType: 'FHA Loan',
      text: 'I was worried about qualifying for a mortgage, but Kedar Mortgage worked with me to find the best solution. They explained all my options clearly and got me approved for an FHA loan. The whole team was supportive and made me feel confident throughout the process.',
      image: 'assets/testimonials/placeholder.jpg',
    },
  ];

  getRatingArray(rating: number): number[] {
    return Array(rating).fill(0);
  }
}
