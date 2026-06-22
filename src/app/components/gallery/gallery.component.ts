import { Component, input, signal, computed, ChangeDetectionStrategy } from '@angular/core';
import { GalleryItem } from '../../interfaces/portfolio.interface';
import { GalleryCardComponent } from './gallery-card/gallery-card.component';
import { ModalComponent } from '../shared/modal/modal.component';
import { AnimateOnScrollDirective } from '../../directives/animate-on-scroll.directive';
import { LazyImageDirective } from '../../directives/lazy-image.directive';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [GalleryCardComponent, ModalComponent, AnimateOnScrollDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent {
  readonly items = input<GalleryItem[]>([]);
  readonly selectedCategory = signal('All');
  readonly lightboxItem = signal<GalleryItem | null>(null);
  readonly isLightboxOpen = signal(false);

  readonly categories = computed(() => {
    const cats = new Set(this.items().map((i) => i.category));
    return ['All', ...Array.from(cats)];
  });

  readonly filteredItems = computed(() => {
    const cat = this.selectedCategory();
    return cat === 'All' ? this.items() : this.items().filter((i) => i.category === cat);
  });

  selectCategory(cat: string): void {
    this.selectedCategory.set(cat);
  }

  openLightbox(item: GalleryItem): void {
    this.lightboxItem.set(item);
    this.isLightboxOpen.set(true);
  }

  closeLightbox(): void {
    this.isLightboxOpen.set(false);
  }
}
