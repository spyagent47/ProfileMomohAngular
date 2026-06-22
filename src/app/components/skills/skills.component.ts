import { Component, input, signal, ChangeDetectionStrategy } from '@angular/core';
import { SkillCategory } from '../../interfaces/portfolio.interface';
import { AnimateOnScrollDirective } from '../../directives/animate-on-scroll.directive';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [AnimateOnScrollDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  readonly categories = input<SkillCategory[]>([]);
  readonly activeTab = signal(0);

  selectTab(index: number): void {
    this.activeTab.set(index);
  }
}
