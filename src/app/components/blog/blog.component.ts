import { Component, input, ChangeDetectionStrategy } from '@angular/core';
import { BlogPost } from '../../interfaces/portfolio.interface';
import { TruncatePipe } from '../../pipes/truncate.pipe';
import { AnimateOnScrollDirective } from '../../directives/animate-on-scroll.directive';
import { LazyImageDirective } from '../../directives/lazy-image.directive';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [TruncatePipe, AnimateOnScrollDirective, LazyImageDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss'
})
export class BlogComponent {
  readonly posts = input<BlogPost[]>([]);
}
