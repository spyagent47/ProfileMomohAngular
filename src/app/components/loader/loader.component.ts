import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-loader',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="loader-overlay" role="status" aria-label="Loading">
      <div class="loader-spinner">
        <div class="spinner-ring"></div>
        <div class="spinner-ring"></div>
        <div class="spinner-ring"></div>
      </div>
      <p class="loader-text">Loading Portfolio...</p>
    </div>
  `,
  styles: `
  .loader-overlay {
    position: fixed;
    inset: 0;
    background: var(--bg-color);
    z-index: 10000;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 24px;
  }
  .loader-spinner {
    position: relative;
    width: 80px;
    height: 80px;
  }
  .spinner-ring {
    position: absolute;
    inset: 0;
    border-radius: 50%;
    border: 3px solid transparent;
    &:nth-child(1) {
      border-top-color: #38bdf8;
      animation: spin 1.2s linear infinite;
    }
    &:nth-child(2) {
      inset: 8px;
      border-right-color: #c084fc;
      animation: spin 1.5s linear infinite reverse;
    }
    &:nth-child(3) {
      inset: 16px;
      border-bottom-color: #7c3aed;
      animation: spin 1s linear infinite;
    }
  }
  .loader-text {
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    font-size: 16px;
    background: linear-gradient(135deg, #38bdf8, #c084fc);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: pulse 2s ease-in-out infinite;
  }
  `
})
export class LoaderComponent {}
