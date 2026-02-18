import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm, NgModel } from '@angular/forms';

interface ContactFormModel {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

@Component({
  selector: 'app-contact',
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  contactForm: ContactFormModel = {
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  };

  submitted = false;
  submitAttempted = false;

  readonly phonePattern = /^[0-9+()\-.\s]{10,20}$/;
  readonly namePattern = /^[a-zA-Z\s'.-]{2,80}$/;

  onSubmit(form: NgForm): void {
    this.submitAttempted = true;

    if (!form.valid) {
      form.control.markAllAsTouched();
      this.submitted = false;
      return;
    }

    this.contactForm = this.sanitizeForm(this.contactForm);
    console.log('Form submitted:', this.contactForm);
    this.submitted = true;

    setTimeout(() => {
      this.submitted = false;
      this.submitAttempted = false;
      this.resetForm(form);
    }, 3000);
  }

  shouldShowError(control: NgModel | null | undefined): boolean {
    if (!control) {
      return false;
    }
    return control.invalid && (control.touched || this.submitAttempted);
  }

  resetForm(form: NgForm): void {
    this.contactForm = {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    };
    form.resetForm(this.contactForm);
  }

  private sanitizeForm(formValue: ContactFormModel): ContactFormModel {
    return {
      name: formValue.name.trim(),
      email: formValue.email.trim().toLowerCase(),
      phone: formValue.phone.trim(),
      subject: formValue.subject.trim(),
      message: formValue.message.trim(),
    };
  }
}
