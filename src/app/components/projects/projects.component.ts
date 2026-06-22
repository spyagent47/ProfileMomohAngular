import { Component, input, signal, computed, ChangeDetectionStrategy } from '@angular/core';
import { Project } from '../../interfaces/portfolio.interface';
import { ProjectCardComponent } from './project-card/project-card.component';
import { AnimateOnScrollDirective } from '../../directives/animate-on-scroll.directive';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectCardComponent, AnimateOnScrollDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  readonly projects = input<Project[]>([]);
  readonly searchQuery = signal('');
  readonly selectedCategory = signal('All');
  readonly currentPage = signal(1);
  readonly pageSize = 6;

  readonly categories = computed(() => {
    const cats = new Set(this.projects().map((p) => p.category));
    return ['All', ...Array.from(cats)];
  });

  readonly filteredProjects = computed(() => {
    let result = this.projects();
    const query = this.searchQuery().toLowerCase();
    const category = this.selectedCategory();

    if (category !== 'All') {
      result = result.filter((p) => p.category === category);
    }
    if (query) {
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query) ||
          p.technologies.some((t) => t.toLowerCase().includes(query))
      );
    }
    return result;
  });

  readonly paginatedProjects = computed(() => {
    const start = (this.currentPage() - 1) * this.pageSize;
    return this.filteredProjects().slice(start, start + this.pageSize);
  });

  readonly totalPages = computed(() =>
    Math.ceil(this.filteredProjects().length / this.pageSize) || 1
  );

  readonly pageNumbers = computed(() =>
    Array.from({ length: this.totalPages() }, (_, i) => i + 1)
  );

  onSearch(event: Event): void {
    this.searchQuery.set((event.target as HTMLInputElement).value);
    this.currentPage.set(1);
  }

  selectCategory(cat: string): void {
    this.selectedCategory.set(cat);
    this.currentPage.set(1);
  }

  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages()) {
      this.currentPage.set(page);
    }
  }
}
