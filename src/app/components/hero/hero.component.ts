import { Component, input, signal, OnInit, OnDestroy, inject, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { HeroData } from '../../interfaces/portfolio.interface';
import { GradientButtonComponent } from '../shared/buttons/gradient-button.component';
import { AnimateOnScrollDirective } from '../../directives/animate-on-scroll.directive';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [GradientButtonComponent, AnimateOnScrollDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent implements OnInit, OnDestroy {
  readonly data = input.required<HeroData>();
  readonly typedText = signal('');
  private readonly router = inject(Router);
  private roleIndex = 0;
  private charIndex = 0;
  private isDeleting = false;
  private timeoutId?: ReturnType<typeof setTimeout>;

  ngOnInit(): void {
    this.typeEffect();
  }

  ngOnDestroy(): void {
    if (this.timeoutId) clearTimeout(this.timeoutId);
  }

  navigateTo(path: string, fragment?: string): void {
    this.router.navigate([path], { fragment });
  }

  private typeEffect(): void {
    const roles = this.data().typingRoles;
    const current = roles[this.roleIndex];
    const speed = this.isDeleting ? 40 : 80;

    if (!this.isDeleting) {
      this.typedText.set(current.substring(0, this.charIndex + 1));
      this.charIndex++;
      if (this.charIndex === current.length) {
        this.isDeleting = true;
        this.timeoutId = setTimeout(() => this.typeEffect(), 2000);
        return;
      }
    } else {
      this.typedText.set(current.substring(0, this.charIndex - 1));
      this.charIndex--;
      if (this.charIndex === 0) {
        this.isDeleting = false;
        this.roleIndex = (this.roleIndex + 1) % roles.length;
      }
    }

    this.timeoutId = setTimeout(() => this.typeEffect(), speed);
  }
}
