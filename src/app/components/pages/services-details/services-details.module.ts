import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { ServicesDetailsRoutingModule } from './services-details-routing.module';
import { ServicesDetailsComponent } from './services-details.component';
import { SharedModule } from '../../shared/shared.module';
import { ContentComponent } from './content/content.component';


@NgModule({
  declarations: [ServicesDetailsComponent, ContentComponent],
  imports: [
    CommonModule,
    ServicesDetailsRoutingModule,
    SharedModule,
    NgbModule,
    HttpClientModule
  ]
})
export class ServicesDetailsModule { }
