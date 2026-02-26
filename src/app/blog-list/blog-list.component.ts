import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import {
  BlogCategory,
  BlogDataService,
  BlogListPost,
} from '../core/data/blog-data.service';

@Component({
  selector: 'app-blog-list',
  imports: [CommonModule, RouterLink],
  templateUrl: './blog-list.component.html',
  styleUrl: './blog-list.component.scss',
})
export class BlogListComponent {
  selectedCategory = 'all';

  categories: BlogCategory[] = [];
  blogPosts: BlogListPost[] = [];

  constructor(private blogDataService: BlogDataService) {
    this.categories = this.blogDataService.getCategories();
    this.blogPosts = this.blogDataService.getBlogPosts();
  }

  get filteredPosts(): BlogListPost[] {
    if (this.selectedCategory === 'all') {
      return this.blogPosts;
    }
    return this.blogPosts.filter(
      (post) => post.category === this.selectedCategory,
    );
  }

  get featuredPosts(): BlogListPost[] {
    return this.blogPosts.filter((post) => post.featured);
  }

  selectCategory(categoryId: string) {
    this.selectedCategory = categoryId;
  }
  getCategoryName(categoryId: string): string {
    const category = this.categories.find((cat) => cat.id === categoryId);
    return category ? category.name : categoryId;
  }
}
