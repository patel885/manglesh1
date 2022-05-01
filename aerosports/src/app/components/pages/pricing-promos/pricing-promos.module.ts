import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PricingPromosComponent } from './pricing-promos.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CountUpModule } from 'ngx-countup';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { SharedModule } from '../../shared/shared.module';
import { HomeRoutingModule } from '../home/home-routing.module';



@NgModule({
  declarations: [PricingPromosComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    NgbModule,
    SlickCarouselModule,
    CountUpModule
  ]
})
export class PricingPromosModule { }
