import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';

import { ServicesV2RoutingModule } from './services-v2-routing.module';
import { ServicesV2Component } from './services-v2.component';
import { SharedModule } from '../../shared/shared.module';
import { ServiceBlockComponent } from './service-block/service-block.component';
import { WhyusComponent } from './whyus/whyus.component';
import { PlansComponent } from './plans/plans.component';
import { BrandsComponent } from './brands/brands.component';


@NgModule({
  declarations: [ServicesV2Component, ServiceBlockComponent, WhyusComponent, PlansComponent, BrandsComponent],
  imports: [
    CommonModule,
    ServicesV2RoutingModule,
    SharedModule,
    NgbModule,
    NgxPaginationModule
  ]
})
export class ServicesV2Module { }
