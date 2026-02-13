import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  contactForm = {
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  };

  submitted = false;

  onSubmit() {
    console.log('Form submitted:', this.contactForm);
    this.submitted = true;
    // Reset form after 3 seconds
    setTimeout(() => {
      this.submitted = false;
      this.resetForm();
    }, 3000);
  }

  resetForm() {
    this.contactForm = {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    };
  }
}
