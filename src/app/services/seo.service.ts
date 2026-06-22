import { Injectable, inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);

  updateMetaTags(config?: {
    title?: string;
    description?: string;
    image?: string;
    url?: string;
  }): void {
    const pageTitle = config?.title
      ? `${config.title} | ${environment.appName}`
      : `${environment.author} - ${environment.title} | ${environment.appName}`;
    const description =
      config?.description ||
      `Professional portfolio of ${environment.author}, a ${environment.title} specializing in Angular, Spring Boot, React, and full-stack development.`;
    const image = config?.image || 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=630&fit=crop';
    const url = config?.url || 'https://johndoe.dev';

    this.title.setTitle(pageTitle);

    this.meta.updateTag({ name: 'description', content: description });
    this.meta.updateTag({ name: 'author', content: environment.author });
    this.meta.updateTag({ name: 'keywords', content: 'software developer, angular, full stack, portfolio, web development' });

    this.meta.updateTag({ property: 'og:title', content: pageTitle });
    this.meta.updateTag({ property: 'og:description', content: description });
    this.meta.updateTag({ property: 'og:image', content: image });
    this.meta.updateTag({ property: 'og:url', content: url });
    this.meta.updateTag({ property: 'og:type', content: 'website' });

    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: pageTitle });
    this.meta.updateTag({ name: 'twitter:description', content: description });
    this.meta.updateTag({ name: 'twitter:image', content: image });
  }
}
