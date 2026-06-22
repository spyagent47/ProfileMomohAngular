import { Injectable, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactFormModel } from '../models/contact-form.model';
import { ToastService } from './toast.service';

@Injectable({ providedIn: 'root' })
export class ContactService {
  private readonly fb = inject(FormBuilder);
  private readonly toast = inject(ToastService);

  createForm(): FormGroup {
    return this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.pattern(/^[+]?[\d\s()-]{7,15}$/)]],
      subject: ['', [Validators.required, Validators.minLength(3)]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  submitForm(form: FormGroup): boolean {
    if (form.invalid) {
      form.markAllAsTouched();
      this.toast.error('Please fill in all required fields correctly.');
      return false;
    }

    const data: ContactFormModel = form.value;
    console.log('Contact form submitted:', data);
    this.toast.success('Thank you! Your message has been sent successfully.');
    form.reset();
    return true;
  }

  getErrorMessage(form: FormGroup, field: string): string {
    const control = form.get(field);
    if (!control?.touched || !control.errors) return '';

    if (control.errors['required']) return 'This field is required';
    if (control.errors['email']) return 'Please enter a valid email';
    if (control.errors['minlength']) {
      const min = control.errors['minlength'].requiredLength;
      return `Minimum ${min} characters required`;
    }
    if (control.errors['pattern']) return 'Please enter a valid phone number';
    return 'Invalid input';
  }
}
