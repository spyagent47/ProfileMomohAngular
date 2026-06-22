import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { PortfolioService } from '../../services/portfolio.service';
import { ContactComponent } from '../../components/contact/contact.component';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [ContactComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @if (portfolio(); as data) {
      <div class="page-section">
        <app-contact [contactInfo]="data.contact" />
      </div>
    }
  `
})
export class ContactPageComponent {
  private readonly portfolioService = inject(PortfolioService);
  readonly portfolio = this.portfolioService.portfolioData;
}
