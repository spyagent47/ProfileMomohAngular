import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { PortfolioService } from '../../services/portfolio.service';
import { SkillsComponent } from '../../components/skills/skills.component';
import { ExperienceComponent } from '../../components/experience/experience.component';

@Component({
  selector: 'app-skills-page',
  standalone: true,
  imports: [SkillsComponent, ExperienceComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @if (portfolio(); as data) {
      <div class="page-section">
        <app-skills [categories]="data.skills" />
      </div>
      <app-experience [experiences]="data.experience" />
    }
  `
})
export class SkillsPageComponent {
  private readonly portfolioService = inject(PortfolioService);
  readonly portfolio = this.portfolioService.portfolioData;
}
