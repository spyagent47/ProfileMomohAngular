import { Routes } from '@angular/router';
import { portfolioGuard } from './guards/portfolio.guard';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./layout/main-layout.component').then((m) => m.MainLayoutComponent),
    canActivate: [portfolioGuard],
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./pages/home-page/home-page.component').then((m) => m.HomePageComponent),
        title: 'John Doe - Senior Software Developer'
      },
      {
        path: 'about',
        loadComponent: () =>
          import('./pages/about-page/about-page.component').then((m) => m.AboutPageComponent),
        title: 'About - John Doe'
      },
      {
        path: 'skills',
        loadComponent: () =>
          import('./pages/skills-page/skills-page.component').then((m) => m.SkillsPageComponent),
        title: 'Skills & Experience - John Doe'
      },
      {
        path: 'education',
        loadComponent: () =>
          import('./pages/education-page/education-page.component').then((m) => m.EducationPageComponent),
        title: 'Education & Certificates - John Doe'
      },
      {
        path: 'gallery',
        loadComponent: () =>
          import('./pages/gallery-page/gallery-page.component').then((m) => m.GalleryPageComponent),
        title: 'Gallery - John Doe'
      },
      {
        path: 'blog',
        loadComponent: () =>
          import('./pages/blog-page/blog-page.component').then((m) => m.BlogPageComponent),
        title: 'Blog - John Doe'
      },
      {
        path: 'contact',
        loadComponent: () =>
          import('./pages/contact-page/contact-page.component').then((m) => m.ContactPageComponent),
        title: 'Contact - John Doe'
      }
    ]
  },
  {
    path: '**',
    redirectTo: ''
  }
];
