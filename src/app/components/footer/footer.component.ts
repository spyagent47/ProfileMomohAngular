import { Component, input, computed, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavLink, SocialLink } from '../../interfaces/portfolio.interface';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  readonly navLinks = input<NavLink[]>([]);
  readonly socialLinks = input<SocialLink[]>([]);
  readonly authorName = input('John Doe');
  readonly authorTitle = input('Senior Software Developer');
  readonly biography = input('');

  readonly currentYear = new Date().getFullYear();

  readonly flatNavLinks = computed(() =>
    this.navLinks().flatMap((link) => (link.children ? [link, ...link.children] : [link]))
  );

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  onNewsletterSubmit(event: Event): void {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const email = (form.elements.namedItem('email') as HTMLInputElement).value;
    if (email) {
      form.reset();
    }
  }
}
