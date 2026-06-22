import { Component, input, ChangeDetectionStrategy } from '@angular/core';
import { Service } from '../../interfaces/portfolio.interface';
import { SectionCardComponent } from '../shared/cards/section-card.component';
import { AnimateOnScrollDirective } from '../../directives/animate-on-scroll.directive';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [SectionCardComponent, AnimateOnScrollDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  readonly services = input<Service[]>([]);
}
