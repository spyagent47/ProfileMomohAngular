import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { PortfolioService } from '../../services/portfolio.service';
import { BlogComponent } from '../../components/blog/blog.component';

@Component({
  selector: 'app-blog-page',
  standalone: true,
  imports: [BlogComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @if (portfolio(); as data) {
      <div class="page-section">
        <app-blog [posts]="data.blog" />
      </div>
    }
  `
})
export class BlogPageComponent {
  private readonly portfolioService = inject(PortfolioService);
  readonly portfolio = this.portfolioService.portfolioData;
}
