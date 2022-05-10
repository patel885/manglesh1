import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { CountUpModule } from 'ngx-countup';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { SharedModule } from '../../shared/shared.module';
import { AboutTextComponent } from './about-text/about-text.component';
import { StrategyComponent } from './strategy/strategy.component';
import { ProcessComponent } from './process/process.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { BrandsComponent } from './brands/brands.component';


@NgModule({
  declarations: [AboutComponent, AboutTextComponent, StrategyComponent, ProcessComponent, AboutUsComponent, TestimonialComponent, BrandsComponent],
  imports: [
    CommonModule,
    AboutRoutingModule,
    SharedModule,
    NgbModule,
    SlickCarouselModule,
    CountUpModule
  ]
})
export class AboutModule { }
