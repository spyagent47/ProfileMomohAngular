import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { PortfolioService } from '../services/portfolio.service';
import { map, of } from 'rxjs';

export const portfolioGuard: CanActivateFn = () => {
  const portfolioService = inject(PortfolioService);
  if (portfolioService.getData()) {
    return of(true);
  }
  return portfolioService.loadPortfolio().pipe(map(() => true));
};
