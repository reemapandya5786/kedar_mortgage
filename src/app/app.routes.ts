import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./about-us/about-us.component').then((m) => m.AboutUsComponent),
  },
  {
    path: 'about-us',
    redirectTo: 'about',
    pathMatch: 'full',
  },
  {
    path: 'rates',
    loadComponent: () =>
      import('./rate-page/rate-page.component').then(
        (m) => m.RatePageComponent,
      ),
  },
  {
    path: 'testimonials',
    loadComponent: () =>
      import('./testimonials/testimonials.component').then(
        (m) => m.TestimonialsComponent,
      ),
  },
  {
    path: 'faq',
    loadComponent: () =>
      import('./faq/faq.component').then((m) => m.FaqComponent),
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./contact/contact.component').then((m) => m.ContactComponent),
  },
  {
    path: 'blog',
    loadComponent: () =>
      import('./blog-list/blog-list.component').then(
        (m) => m.BlogListComponent,
      ),
  },
  {
    path: 'blog/:id',
    loadComponent: () =>
      import('./blog-detail/blog-detail.component').then(
        (m) => m.BlogDetailComponent,
      ),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
