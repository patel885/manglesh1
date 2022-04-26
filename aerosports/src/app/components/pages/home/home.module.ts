import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { CountUpModule } from 'ngx-countup';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SharedModule } from '../../shared/shared.module';
import { BannerComponent } from './banner/banner.component';
import { AboutTextComponent } from './about-text/about-text.component';
import { ProcessComponent } from './process/process.component';
import { BrandsComponent } from './brands/brands.component';
import { ServicesComponent } from './services/services.component';
import { CounterComponent } from './counter/counter.component';
import { TeamComponent } from './team/team.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { CaseComponent } from './case/case.component';
import { PlansComponent } from './plans/plans.component';
import { LocationComponent } from './location/location.component';
import { AttractionsModule } from '../attractions/attractions.module';
import { PartiesEventsModule } from '../parties-events/parties-events.module';


@NgModule({
  declarations: [HomeComponent, BannerComponent, AboutTextComponent, ProcessComponent, BrandsComponent, 
    ServicesComponent, CounterComponent, TeamComponent, TestimonialsComponent, BlogPostComponent, AboutUsComponent, 
    CaseComponent, PlansComponent, LocationComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    NgbModule,
    SlickCarouselModule,
    CountUpModule,
    AttractionsModule,
    PartiesEventsModule
  ]
})
export class HomeModule { }
