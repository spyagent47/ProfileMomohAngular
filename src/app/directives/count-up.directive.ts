import { Directive, ElementRef, Input, OnChanges, inject } from '@angular/core';

@Directive({
  selector: '[appCountUp]',
  standalone: true
})
export class CountUpDirective implements OnChanges {
  private readonly el = inject(ElementRef<HTMLElement>);
  @Input('appCountUp') target = 0;
  @Input() countDuration = 2000;
  @Input() countSuffix = '';

  ngOnChanges(): void {
    this.animateCount();
  }

  private animateCount(): void {
    const element = this.el.nativeElement;
    const start = 0;
    const end = this.target;
    const duration = this.countDuration;
    const startTime = performance.now();

    const step = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(start + (end - start) * eased);
      element.textContent = current.toLocaleString() + this.countSuffix;

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }
}
