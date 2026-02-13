import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
  image: string;
  featured?: boolean;
}

@Component({
  selector: 'app-blog-list',
  imports: [CommonModule, RouterLink],
  templateUrl: './blog-list.component.html',
  styleUrl: './blog-list.component.scss',
})
export class BlogListComponent {
  selectedCategory = 'all';

  categories = [
    { id: 'all', name: 'All Posts' },
    { id: 'buying', name: 'Home Buying' },
    { id: 'refinancing', name: 'Refinancing' },
    { id: 'firsttime', name: 'First-Time Buyers' },
    { id: 'tips', name: 'Tips & Advice' },
    { id: 'market', name: 'Market Updates' },
  ];

  blogPosts: BlogPost[] = [
    {
      id: 1,
      title: '10 Things First-Time Homebuyers Should Know',
      excerpt:
        'Buying your first home is exciting but can be overwhelming. Here are the essential things you need to know before starting your home buying journey.',
      author: 'Sarah Johnson',
      date: 'February 10, 2026',
      category: 'firsttime',
      readTime: '5 min read',
      image: 'assets/blog/placeholder-1.jpg',
      featured: true,
    },
    {
      id: 2,
      title: 'Understanding Mortgage Rates: What Affects Your Rate?',
      excerpt:
        'Learn about the key factors that influence your mortgage interest rate and how you can potentially secure a better rate.',
      author: 'Michael Chen',
      date: 'February 8, 2026',
      category: 'tips',
      readTime: '7 min read',
      image: 'assets/blog/placeholder-2.jpg',
      featured: true,
    },
    {
      id: 3,
      title: 'Is Refinancing Right for You? A Complete Guide',
      excerpt:
        "Discover when it makes sense to refinance your mortgage and how to determine if you'll benefit from refinancing.",
      author: 'Emily Rodriguez',
      date: 'February 5, 2026',
      category: 'refinancing',
      readTime: '6 min read',
      image: 'assets/blog/placeholder-3.jpg',
    },
    {
      id: 4,
      title: '2026 Housing Market Forecast: What to Expect',
      excerpt:
        'Our experts analyze current trends and provide insights into what the housing market might look like in 2026.',
      author: 'David Thompson',
      date: 'February 1, 2026',
      category: 'market',
      readTime: '8 min read',
      image: 'assets/blog/placeholder-4.jpg',
    },
    {
      id: 5,
      title: 'How to Improve Your Credit Score Before Applying',
      excerpt:
        'A higher credit score can help you qualify for better rates. Here are proven strategies to boost your score.',
      author: 'Jessica Martinez',
      date: 'January 28, 2026',
      category: 'tips',
      readTime: '5 min read',
      image: 'assets/blog/placeholder-5.jpg',
    },
    {
      id: 6,
      title: 'The Pre-Approval Process: Step by Step',
      excerpt:
        "Get pre-approved with confidence. We break down each step of the pre-approval process and what documents you'll need.",
      author: 'Robert Williams',
      date: 'January 25, 2026',
      category: 'buying',
      readTime: '6 min read',
      image: 'assets/blog/placeholder-6.jpg',
    },
    {
      id: 7,
      title: 'Fixed vs. Adjustable Rate Mortgages: Which is Better?',
      excerpt:
        'Compare the pros and cons of fixed and adjustable rate mortgages to determine which option suits your needs.',
      author: 'Sarah Johnson',
      date: 'January 20, 2026',
      category: 'tips',
      readTime: '7 min read',
      image: 'assets/blog/placeholder-7.jpg',
    },
    {
      id: 8,
      title: 'Understanding Down Payments and PMI',
      excerpt:
        "Learn how much you need for a down payment and when you'll need to pay private mortgage insurance.",
      author: 'Michael Chen',
      date: 'January 15, 2026',
      category: 'firsttime',
      readTime: '5 min read',
      image: 'assets/blog/placeholder-8.jpg',
    },
    {
      id: 9,
      title: 'Top 5 Mistakes to Avoid When Buying a Home',
      excerpt:
        "Don't let these common mistakes derail your home purchase. Learn what to avoid and how to stay on track.",
      author: 'Emily Rodriguez',
      date: 'January 10, 2026',
      category: 'buying',
      readTime: '6 min read',
      image: 'assets/blog/placeholder-9.jpg',
    },
  ];

  get filteredPosts(): BlogPost[] {
    if (this.selectedCategory === 'all') {
      return this.blogPosts;
    }
    return this.blogPosts.filter(
      (post) => post.category === this.selectedCategory,
    );
  }

  get featuredPosts(): BlogPost[] {
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
