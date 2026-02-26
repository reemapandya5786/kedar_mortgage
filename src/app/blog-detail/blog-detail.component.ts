import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import {
  BlogDataService,
  BlogDetailPost,
  RelatedPost,
} from '../core/data/blog-data.service';

@Component({
  selector: 'app-blog-detail',
  imports: [CommonModule, RouterLink],
  templateUrl: './blog-detail.component.html',
  styleUrl: './blog-detail.component.scss',
})
export class BlogDetailComponent implements OnInit {
  postId = 0;
  post?: BlogDetailPost;
  relatedPosts: RelatedPost[] = [];

  constructor(
    private route: ActivatedRoute,
    private blogDataService: BlogDataService,
  ) {
    this.relatedPosts = this.blogDataService.getRelatedPosts();
  }

  ngOnInit(): void {
    const routeId = this.route.snapshot.paramMap.get('id');
    this.postId = this.parsePostId(routeId);
    this.loadPost();
  }

  loadPost(): void {
    this.post = this.blogDataService.getBlogPostById(this.postId);
  }

  private parsePostId(routeId: string | null): number {
    if (!routeId) {
      return 0;
    }

    const parsed = Number(routeId);
    if (!Number.isInteger(parsed) || parsed < 1) {
      return 0;
    }

    return parsed;
  }
}
