import { Component, input, ChangeDetectionStrategy } from '@angular/core';
import { Certificate } from '../../interfaces/portfolio.interface';
import { AnimateOnScrollDirective } from '../../directives/animate-on-scroll.directive';
import { LazyImageDirective } from '../../directives/lazy-image.directive';

@Component({
  selector: 'app-certificates',
  standalone: true,
  imports: [AnimateOnScrollDirective, LazyImageDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './certificates.component.html',
  styleUrl: './certificates.component.scss'
})
export class CertificatesComponent {
  readonly certificates = input<Certificate[]>([]);
}
