import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BreadcrumbModule } from 'angular-crumbs';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { FormsModule } from '@angular/forms';


import { BlogSidebarComponent } from './blog-sidebar/blog-sidebar.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { CanvasComponent } from './canvas/canvas.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MobileMenuComponent } from './mobile-menu/mobile-menu.component';



@NgModule({
  declarations: [BlogSidebarComponent, BreadcrumbsComponent, CanvasComponent, FooterComponent, HeaderComponent, MobileMenuComponent],
  imports: [
    CommonModule,
    RouterModule,
    SlickCarouselModule,
    NgbModule,
    BreadcrumbModule,
    FormsModule
  ],
  exports: [BlogSidebarComponent, BreadcrumbsComponent, FooterComponent, HeaderComponent]
})
export class SharedModule { }
