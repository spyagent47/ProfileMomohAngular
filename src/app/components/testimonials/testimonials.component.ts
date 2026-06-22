import { Component, input, signal, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { Testimonial } from '../../interfaces/portfolio.interface';
import { AnimateOnScrollDirective } from '../../directives/animate-on-scroll.directive';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [AnimateOnScrollDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss'
})
export class TestimonialsComponent implements OnInit, OnDestroy {
  readonly testimonials = input<Testimonial[]>([]);
  readonly activeIndex = signal(0);
  private intervalId?: ReturnType<typeof setInterval>;

  ngOnInit(): void {
    this.intervalId = setInterval(() => this.next(), 5000);
  }

  ngOnDestroy(): void {
    if (this.intervalId) clearInterval(this.intervalId);
  }

  next(): void {
    const len = this.testimonials().length;
    if (len) this.activeIndex.update((i) => (i + 1) % len);
  }

  prev(): void {
    const len = this.testimonials().length;
    if (len) this.activeIndex.update((i) => (i - 1 + len) % len);
  }

  goTo(index: number): void {
    this.activeIndex.set(index);
  }
}
