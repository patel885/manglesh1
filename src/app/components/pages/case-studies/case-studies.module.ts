import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { CaseStudiesRoutingModule } from './case-studies-routing.module';
import { CaseStudiesComponent } from './case-studies.component';
import { SharedModule } from '../../shared/shared.module';
import { ContentComponent } from './content/content.component';


@NgModule({
  declarations: [CaseStudiesComponent, ContentComponent],
  imports: [
    CommonModule,
    CaseStudiesRoutingModule,
    SharedModule,
    NgbModule,
    HttpClientModule
  ]
})
export class CaseStudiesModule { }
