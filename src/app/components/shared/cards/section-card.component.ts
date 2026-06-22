import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-section-card',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="section-card card-base" [class.padded]="padded">
      @if (icon) {
        <div class="card-icon">
          <i [class]="icon" aria-hidden="true"></i>
        </div>
      }
      @if (title) {
        <h3 class="card-title">{{ title }}</h3>
      }
      <div class="card-content">
        <ng-content></ng-content>
      </div>
    </div>
  `,
  styles: `
  .section-card {
    padding: 0;
    height: 100%;
  }
  .section-card.padded {
    padding: 30px;
  }
  .card-icon {
    width: 60px;
    height: 60px;
    border-radius: 16px;
    background: linear-gradient(135deg, #38bdf8, #c084fc);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    font-size: 24px;
    color: white;
  }
  .card-title {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 12px;
    color: var(--text-color);
  }
  .card-content {
    color: var(--text-muted);
    font-size: 15px;
    line-height: 1.7;
  }
  `
})
export class SectionCardComponent {
  @Input() title = '';
  @Input() icon = '';
  @Input() padded = true;
}
