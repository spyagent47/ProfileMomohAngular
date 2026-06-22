import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-modal',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @if (isOpen) {
      <div class="modal-backdrop" (click)="close()" role="presentation">
        <div
          class="modal-content"
          (click)="$event.stopPropagation()"
          role="dialog"
          [attr.aria-label]="title"
        >
          <button class="modal-close" (click)="close()" aria-label="Close modal">
            <i class="fa-solid fa-xmark"></i>
          </button>
          @if (title) {
            <h3 class="modal-title">{{ title }}</h3>
          }
          <div class="modal-body">
            <ng-content></ng-content>
          </div>
        </div>
      </div>
    }
  `,
  styles: `
  .modal-backdrop {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.8);
    z-index: 9999;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    animation: fadeIn 0.3s ease;
  }
  .modal-content {
    background: var(--card-bg);
    border-radius: 20px;
    max-width: 900px;
    width: 100%;
    max-height: 90vh;
    overflow: auto;
    position: relative;
    animation: scaleIn 0.3s ease;
  }
  .modal-close {
    position: absolute;
    top: 16px;
    right: 16px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: none;
    background: rgba(0, 0, 0, 0.1);
    color: var(--text-color);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    transition: all 0.3s;
    z-index: 1;
    &:hover { background: #ef4444; color: white; }
  }
  .modal-title {
    padding: 24px 24px 0;
    font-size: 22px;
    color: var(--text-color);
  }
  .modal-body { padding: 24px; }
  `
})
export class ModalComponent {
  @Input() isOpen = false;
  @Input() title = '';
  @Output() closed = new EventEmitter<void>();

  close(): void {
    this.closed.emit();
  }
}
