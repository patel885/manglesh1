import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { CountUpModule } from 'ngx-countup';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SharedModule } from '../../shared/shared.module';
import { AboutTextComponent } from './about-text/about-text.component';

import { BrandsComponent } from './brands/brands.component';
import { ServicesComponent } from './services/services.component';
import { CounterComponent } from './counter/counter.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { PlansComponent } from './plans/plans.component';
import { LocationComponent } from './location/location.component';
import { AttractionsModule } from '../attractions/attractions.module';
import { PartiesEventsModule } from '../parties-events/parties-events.module';
import { FunckySectionComponent } from '../../shared/funckySection.component';

@NgModule({
  declarations: [HomeComponent,  AboutTextComponent,  BrandsComponent, 
    ServicesComponent, CounterComponent,  TestimonialsComponent, BlogPostComponent, AboutUsComponent, 
     PlansComponent, LocationComponent,FunckySectionComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    NgbModule,
    SlickCarouselModule,
    CountUpModule,
    AttractionsModule,
    PartiesEventsModule, 
  ]
})
export class HomeModule { }
