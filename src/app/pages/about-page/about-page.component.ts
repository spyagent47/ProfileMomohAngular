import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { PortfolioService } from '../../services/portfolio.service';
import { AboutComponent } from '../../components/about/about.component';

@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [AboutComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @if (portfolio(); as data) {
      <div class="page-section">
        <app-about [data]="data.about" />
      </div>
    }
  `
})
export class AboutPageComponent {
  private readonly portfolioService = inject(PortfolioService);
  readonly portfolio = this.portfolioService.portfolioData;
}
