import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // home
  { path: '', loadChildren: () => import('./components/pages/home/home.module').then(m => m.HomeModule), data: { breadcrumb: 'Homepage' } },
  { path: 'home-v2', loadChildren: () => import('./components/pages/home-v2/home-v2.module').then(m => m.HomeV2Module), data: { breadcrumb: 'Homepage' } },
  // Blog
  { path: 'blog/cat/:catId', loadChildren: () => import('./components/pages/blog/blog.module').then(m => m.BlogModule), data: { breadcrumb: 'Blog Grid' } }, 
  { path: 'blog/tag/:tagId', loadChildren: () => import('./components/pages/blog/blog.module').then(m => m.BlogModule), data: { breadcrumb: 'Blog Grid' } }, 
  { path: 'blog/user/:userId', loadChildren: () => import('./components/pages/blog/blog.module').then(m => m.BlogModule), data: { breadcrumb: 'Blog Grid' } }, 
  { path: 'blog/search/:query', loadChildren: () => import('./components/pages/blog/blog.module').then(m => m.BlogModule), data: { breadcrumb: 'Blog Grid' } }, 
  { path: 'blog', loadChildren: () => import('./components/pages/blog/blog.module').then(m => m.BlogModule), data: { breadcrumb: 'Blog Grid' } }, 
  { path: 'blog-standard', loadChildren: () => import('./components/pages/blog-standard/blog-standard.module').then(m => m.BlogStandardModule), data: { breadcrumb: 'Blog Standard' } },
  { path: 'blog-details/:id', loadChildren: () => import('./components/pages/blog-details/blog-details.module').then(m => m.BlogDetailsModule), data: { breadcrumb: 'Blog Details' } },
  // About
  { path: 'about', loadChildren: () => import('./components/pages/about/about.module').then(m => m.AboutModule), data: { breadcrumb: 'About Us' } },
  // Contact
  { path: 'contact', loadChildren: () => import('./components/pages/contact/contact.module').then(m => m.ContactModule), data: { breadcrumb: 'Contact Us' } },
  // Team
  { path: 'team', loadChildren: () => import('./components/pages/team/team.module').then(m => m.TeamModule), data: { breadcrumb: 'Team' } },
  // Faqs
  { path: 'faqs', loadChildren: () => import('./components/pages/faqs/faqs.module').then(m => m.FaqsModule), data: { breadcrumb: "FAQ's" } },
  // History
  { path: 'history', loadChildren: () => import('./components/pages/history/history.module').then(m => m.HistoryModule), data: { breadcrumb: 'History' } },
  // Services
  { path: 'services', loadChildren: () => import('./components/pages/services/services.module').then(m => m.ServicesModule), data: { breadcrumb: 'Services' } },
  { path: 'services-v2', loadChildren: () => import('./components/pages/services-v2/services-v2.module').then(m => m.ServicesV2Module), data: { breadcrumb: 'Services' } },
  { path: 'service-details/:id', loadChildren: () => import('./components/pages/services-details/services-details.module').then(m => m.ServicesDetailsModule), data: { breadcrumb: 'Service Details' } },
  // Events
  { path: 'case-study', loadChildren: () => import('./components/pages/case-study/case-study.module').then(m => m.CaseStudyModule), data: { breadcrumb: 'Case Study' } },
  { path: 'case-studies/:id', loadChildren: () => import('./components/pages/case-studies/case-studies.module').then(m => m.CaseStudiesModule), data: { breadcrumb: 'Case Studies' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
