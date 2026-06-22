import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-gradient-button',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <button
      [type]="type"
      [class]="variant === 'outline' ? 'btn-outline-gradient' : 'btn-gradient'"
      [class.btn-sm]="size === 'sm'"
      [class.btn-lg]="size === 'lg'"
      [disabled]="disabled"
      (click)="clicked.emit($event)"
      [attr.aria-label]="ariaLabel"
    >
      @if (icon) {
        <i [class]="icon" aria-hidden="true"></i>
      }
      <ng-content></ng-content>
    </button>
  `,
  styles: `
    :host { display: inline-block; }
    button:disabled { opacity: 0.6; cursor: not-allowed; transform: none !important; }
    .btn-sm { padding: 8px 20px; font-size: 14px; }
    .btn-lg { padding: 14px 32px; font-size: 18px; }
  `
})
export class GradientButtonComponent {
  @Input() variant: 'solid' | 'outline' = 'solid';
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
  @Input() icon = '';
  @Input() type: 'button' | 'submit' = 'button';
  @Input() disabled = false;
  @Input() ariaLabel = '';
  @Output() clicked = new EventEmitter<MouseEvent>();
}
