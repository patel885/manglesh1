import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';
import { SlickCarouselModule } from 'ngx-slick-carousel';

import { ServicesRoutingModule } from './services-routing.module';
import { ServicesComponent } from './services.component';
import { SharedModule } from '../../shared/shared.module';
import { BlockComponent } from './block/block.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { BrandsComponent } from './brands/brands.component';
import { ServiceBlockComponent } from './service-block/service-block.component';
import { PlansComponent } from './plans/plans.component';


@NgModule({
  declarations: [ServicesComponent, BlockComponent, TestimonialsComponent, BrandsComponent, ServiceBlockComponent, PlansComponent],
  imports: [
    CommonModule,
    ServicesRoutingModule,
    SharedModule,
    NgbModule,
    NgxPaginationModule,
    SlickCarouselModule
  ]
})
export class ServicesModule { }
