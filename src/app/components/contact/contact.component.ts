import { Component, input, inject, ChangeDetectionStrategy } from '@angular/core';
import { ReactiveFormsModule, FormGroup } from '@angular/forms';
import { ContactInfo } from '../../interfaces/portfolio.interface';
import { ContactService } from '../../services/contact.service';
import { GradientButtonComponent } from '../shared/buttons/gradient-button.component';
import { AnimateOnScrollDirective } from '../../directives/animate-on-scroll.directive';

import { SafeUrlPipe } from '../../pipes/safe-url.pipe';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, GradientButtonComponent, AnimateOnScrollDirective, SafeUrlPipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  readonly contactInfo = input.required<ContactInfo>();
  private readonly contactService = inject(ContactService);
  readonly contactForm: FormGroup = this.contactService.createForm();

  onSubmit(): void {
    this.contactService.submitForm(this.contactForm);
  }

  getError(field: string): string {
    return this.contactService.getErrorMessage(this.contactForm, field);
  }
}
