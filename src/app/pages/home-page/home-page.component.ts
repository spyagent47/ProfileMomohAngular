import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { PortfolioService } from '../../services/portfolio.service';
import { HeroComponent } from '../../components/hero/hero.component';
import { ServicesComponent } from '../../components/services/services.component';
import { ProjectsComponent } from '../../components/projects/projects.component';
import { StatisticsComponent } from '../../components/statistics/statistics.component';
import { TestimonialsComponent } from '../../components/testimonials/testimonials.component';
import { ResumeComponent } from '../../components/resume/resume.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    HeroComponent,
    ServicesComponent,
    ProjectsComponent,
    StatisticsComponent,
    TestimonialsComponent,
    ResumeComponent
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @if (portfolio(); as data) {
      <app-hero [data]="data.hero" />
      <app-services [services]="data.services" />
      <app-projects [projects]="data.projects" />
      <app-statistics [statistics]="data.statistics" />
      <app-testimonials [testimonials]="data.testimonials" />
      <app-resume [cvUrl]="data.hero.cvUrl" [authorName]="data.hero.name" />
    }
  `
})
export class HomePageComponent {
  private readonly portfolioService = inject(PortfolioService);
  readonly portfolio = this.portfolioService.portfolioData;
}
