import {
  Component,
  inject,
  signal,
  HostListener,
  ChangeDetectionStrategy,
  input,
  DestroyRef
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { filter } from 'rxjs';
import { NavLink, SocialLink } from '../../interfaces/portfolio.interface';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  readonly navLinks = input<NavLink[]>([]);
  readonly socialLinks = input<SocialLink[]>([]);
  readonly profileImage = input('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face');
  readonly authorName = input('John Doe');
  readonly authorTitle = input('Senior Software Developer');
  readonly cvUrl = input('assets/files/john-doe-cv.pdf');

  private readonly themeService = inject(ThemeService);
  private readonly router = inject(Router);
  private readonly destroyRef = inject(DestroyRef);
  private readonly desktopBreakpoint = 992;

  readonly isDarkMode = this.themeService.isDarkMode;
  readonly isScrolled = signal(false);
  readonly isMenuOpen = signal(false);
  readonly openSubmenu = signal<string | null>(null);

  constructor() {
    this.router.events
      .pipe(
        filter((event): event is NavigationEnd => event instanceof NavigationEnd),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe(() => this.closeSubmenu());
  }

  @HostListener('window:scroll')
  onScroll(): void {
    this.isScrolled.set(window.scrollY > 50);
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    if (!target.closest('.has-submenu')) {
      this.closeSubmenu();
    }
  }

  private isDesktop(): boolean {
    return window.innerWidth >= this.desktopBreakpoint;
  }

  toggleMenu(): void {
    this.isMenuOpen.update((v) => !v);
  }

  closeMenu(): void {
    this.isMenuOpen.set(false);
    this.closeSubmenu();
  }

  closeSubmenu(): void {
    this.openSubmenu.set(null);
    this.blurFocusedElement();
  }

  openSubmenuOnHover(route: string): void {
    if (this.isDesktop()) {
      this.openSubmenu.set(route);
    }
  }

  closeSubmenuOnHover(): void {
    if (this.isDesktop()) {
      this.closeSubmenu();
    }
  }

  toggleSubmenu(route: string, event: Event): void {
    event.preventDefault();
    event.stopPropagation();
    this.openSubmenu.update((current) => (current === route ? null : route));
  }

  onSubmenuChildClick(event: Event): void {
    event.stopPropagation();
    this.closeMenu();
    this.closeSubmenu();
  }

  isSubmenuOpen(route: string): boolean {
    return this.openSubmenu() === route;
  }

  isSubmenuActive(link: NavLink): boolean {
    const url = this.router.url.split('#')[0].split('?')[0] || '/';
    if (url === link.route && !link.children?.length) return true;
    return link.children?.some((child) => this.isLinkActive(child)) ?? false;
  }

  isLinkActive(link: NavLink): boolean {
    const url = this.router.url.split('#')[0].split('?')[0] || '/';
    const fragment = this.router.parseUrl(this.router.url).fragment;
    if (link.fragment) {
      return url === link.route && fragment === link.fragment;
    }
    return url === link.route;
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }

  private blurFocusedElement(): void {
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
  }
}
