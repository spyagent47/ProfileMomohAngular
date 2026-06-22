import { Component, input, computed, ChangeDetectionStrategy } from '@angular/core';
import { AboutData } from '../../interfaces/portfolio.interface';
import { AnimateOnScrollDirective } from '../../directives/animate-on-scroll.directive';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [AnimateOnScrollDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  readonly data = input.required<AboutData>();

  readonly personalInfoItems = computed(() => {
    const info = this.data().personalInfo;
    return [
      { label: 'Location', value: info.location, icon: 'fa-solid fa-location-dot' },
      { label: 'Email', value: info.email, icon: 'fa-solid fa-envelope' },
      { label: 'Phone', value: info.phone, icon: 'fa-solid fa-phone' },
      { label: 'Languages', value: info.languages.join(', '), icon: 'fa-solid fa-language' },
      { label: 'Nationality', value: info.nationality, icon: 'fa-solid fa-flag' },
      { label: 'Availability', value: info.availability, icon: 'fa-solid fa-calendar-check' },
      { label: 'Freelancer', value: info.freelancerStatus, icon: 'fa-solid fa-laptop-code' }
    ];
  });
}
