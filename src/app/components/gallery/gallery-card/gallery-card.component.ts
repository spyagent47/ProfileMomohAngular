import { Component, input, output, ChangeDetectionStrategy } from '@angular/core';
import { GalleryItem } from '../../../interfaces/portfolio.interface';
import { LazyImageDirective } from '../../../directives/lazy-image.directive';

@Component({
  selector: 'app-gallery-card',
  standalone: true,
  imports: [LazyImageDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="gallery-item" (click)="select.emit(item())" role="button" tabindex="0" (keydown.enter)="select.emit(item())" [attr.aria-label]="'View ' + item().title">
      <img [src]="item().image" [alt]="item().title" loading="lazy" appLazyImage />
      <div class="gallery-overlay">
        <span class="gallery-category">{{ item().category }}</span>
        <h4>{{ item().title }}</h4>
        <i class="fa-solid fa-expand" aria-hidden="true"></i>
      </div>
    </div>
  `,
  styleUrl: './gallery-card.component.scss'
})
export class GalleryCardComponent {
  readonly item = input.required<GalleryItem>();
  readonly select = output<GalleryItem>();
}
