import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of, throwError } from 'rxjs';
import { NgForm } from '@angular/forms';

import { ContactComponent } from './contact.component';
import { ContactApiService } from '../core/data/contact-api.service';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;
  let submitContactFormSpy: jasmine.Spy;

  const createMockForm = (valid: boolean): NgForm => {
    return {
      valid,
      control: {
        markAllAsTouched: jasmine.createSpy('markAllAsTouched'),
      },
      resetForm: jasmine.createSpy('resetForm'),
    } as unknown as NgForm;
  };

  beforeEach(async () => {
    submitContactFormSpy = jasmine
      .createSpy('submitContactForm')
      .and.returnValue(of(void 0));

    await TestBed.configureTestingModule({
      imports: [ContactComponent],
      providers: [
        {
          provide: ContactApiService,
          useValue: {
            submitContactForm: submitContactFormSpy,
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not submit when form is invalid', () => {
    const form = createMockForm(false);

    component.onSubmit(form);

    expect(form.control.markAllAsTouched).toHaveBeenCalled();
    expect(submitContactFormSpy).not.toHaveBeenCalled();
    expect(component.submitted).toBeFalse();
  });

  it('should submit sanitized payload when form is valid', () => {
    const form = createMockForm(true);
    component.contactForm = {
      name: '  Jane Doe  ',
      email: '  JANE@EXAMPLE.COM  ',
      phone: ' (555) 123-4567 ',
      subject: 'rates',
      message: '  I want to know current mortgage options.  ',
    };

    component.onSubmit(form);

    expect(submitContactFormSpy).toHaveBeenCalledWith({
      name: 'Jane Doe',
      email: 'jane@example.com',
      phone: '(555) 123-4567',
      subject: 'rates',
      message: 'I want to know current mortgage options.',
    });
    expect(component.submitted).toBeTrue();
    expect(component.submitError).toBe('');
  });

  it('should show error when API submission fails after retries', () => {
    submitContactFormSpy.and.returnValue(
      throwError(() => new Error('Network failure')),
    );
    const form = createMockForm(true);

    component.onSubmit(form);

    expect(component.submitted).toBeFalse();
    expect(component.submitError).toContain('could not send your message');
    expect(component.submitting).toBeFalse();
  });
});
