import { Directive, HostListener, ElementRef, inject } from '@angular/core';

@Directive({
  selector: '[appLazyImage]',
  standalone: true
})
export class LazyImageDirective {
  private readonly el = inject(ElementRef<HTMLImageElement>);
  @HostListener('error')
  onError(): void {
    this.el.nativeElement.src = 'https://via.placeholder.com/600x400/38BDF8/ffffff?text=Image';
  }
}
