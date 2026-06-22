import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { PortfolioData } from '../interfaces/portfolio.interface';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class PortfolioService {
  private readonly http = inject(HttpClient);
  private readonly data = signal<PortfolioData | null>(null);
  private readonly loading = signal(true);

  readonly portfolioData = this.data.asReadonly();
  readonly isLoading = this.loading.asReadonly();

  loadPortfolio(): Observable<PortfolioData> {
    this.loading.set(true);
    return this.http.get<PortfolioData>(`${environment.apiUrl}/portfolio.json`).pipe(
      tap((data) => {
        this.data.set(data);
        this.loading.set(false);
      })
    );
  }

  getData(): PortfolioData | null {
    return this.data();
  }
}
