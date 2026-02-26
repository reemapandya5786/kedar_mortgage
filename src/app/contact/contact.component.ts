import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { finalize } from 'rxjs/operators';
import {
  ContactApiService,
  ContactSubmissionPayload,
} from '../core/data/contact-api.service';

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
  submitting = false;
  submitError = '';

  readonly phonePattern = /^[0-9+()\-.\s]{10,20}$/;
  readonly namePattern = /^[a-zA-Z\s'.-]{2,80}$/;

  constructor(private contactApiService: ContactApiService) {}

  onSubmit(form: NgForm): void {
    this.submitAttempted = true;

    if (!form.valid) {
      form.control.markAllAsTouched();
      this.submitted = false;
      return;
    }

    this.contactForm = this.sanitizeForm(this.contactForm);
    this.submitError = '';
    this.submitted = false;
    this.submitting = true;

    const payload: ContactSubmissionPayload = { ...this.contactForm };

    this.contactApiService
      .submitContactForm(payload)
      .pipe(
        finalize(() => {
          this.submitting = false;
        }),
      )
      .subscribe({
        next: () => {
          this.submitted = true;

          setTimeout(() => {
            this.submitted = false;
          }, 3000);

          this.submitAttempted = false;
          this.resetForm(form);
        },
        error: () => {
          this.submitted = false;
          this.submitError =
            'We could not send your message right now. Please try again in a moment.';
        },
      });
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
