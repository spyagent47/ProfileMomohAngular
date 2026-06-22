import { Component, input, ChangeDetectionStrategy } from '@angular/core';
import { Statistic } from '../../interfaces/portfolio.interface';
import { CountUpDirective } from '../../directives/count-up.directive';
import { AnimateOnScrollDirective } from '../../directives/animate-on-scroll.directive';

@Component({
  selector: 'app-statistics',
  standalone: true,
  imports: [CountUpDirective, AnimateOnScrollDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './statistics.component.html',
  styleUrl: './statistics.component.scss'
})
export class StatisticsComponent {
  readonly statistics = input<Statistic[]>([]);
}
