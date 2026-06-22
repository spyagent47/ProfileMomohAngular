import { Component, input, ChangeDetectionStrategy } from '@angular/core';
import { Project } from '../../../interfaces/portfolio.interface';
import { LazyImageDirective } from '../../../directives/lazy-image.directive';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [LazyImageDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss'
})
export class ProjectCardComponent {
  readonly project = input.required<Project>();
}
