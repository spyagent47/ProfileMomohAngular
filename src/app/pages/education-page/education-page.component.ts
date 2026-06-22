import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { PortfolioService } from '../../services/portfolio.service';
import { EducationComponent } from '../../components/education/education.component';
import { CertificatesComponent } from '../../components/certificates/certificates.component';

@Component({
  selector: 'app-education-page',
  standalone: true,
  imports: [EducationComponent, CertificatesComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @if (portfolio(); as data) {
      <div class="page-section">
        <app-education [education]="data.education" />
      </div>
      <app-certificates [certificates]="data.certificates" />
    }
  `
})
export class EducationPageComponent {
  private readonly portfolioService = inject(PortfolioService);
  readonly portfolio = this.portfolioService.portfolioData;
}
