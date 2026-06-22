import { Component, inject, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PortfolioService } from '../services/portfolio.service';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { FooterComponent } from '../components/footer/footer.component';
import { LoaderComponent } from '../components/loader/loader.component';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent, LoaderComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss'
})
export class MainLayoutComponent implements OnInit {
  private readonly portfolioService = inject(PortfolioService);
  readonly isLoading = this.portfolioService.isLoading;
  readonly data = this.portfolioService.portfolioData;

  ngOnInit(): void {
    if (!this.portfolioService.getData()) {
      this.portfolioService.loadPortfolio().subscribe();
    }
  }
}
