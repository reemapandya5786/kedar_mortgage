import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about-us',
  imports: [CommonModule],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss',
})
export class AboutUsComponent {
  teamMembers = [
    {
      name: 'John Doe',
      position: 'CEO & Founder',
      bio: 'With over 20 years in the mortgage industry, John leads our team with passion and expertise.',
      image: 'assets/team/placeholder.jpg',
    },
    {
      name: 'Jane Smith',
      position: 'Senior Loan Officer',
      bio: 'Jane specializes in first-time homebuyer programs and refinancing solutions.',
      image: 'assets/team/placeholder.jpg',
    },
    {
      name: 'Michael Johnson',
      position: 'Mortgage Consultant',
      bio: 'Michael helps clients navigate complex financing options with personalized guidance.',
      image: 'assets/team/placeholder.jpg',
    },
  ];

  stats = [
    { value: '10+', label: 'Years in Business' },
    { value: '5000+', label: 'Happy Clients' },
    { value: '$500M+', label: 'Loans Funded' },
    { value: '98%', label: 'Satisfaction Rate' },
  ];
}
