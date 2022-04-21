import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { CaseStudyRoutingModule } from './case-study-routing.module';
import { CaseStudyComponent } from './case-study.component';
import { SharedModule } from '../../shared/shared.module';
import { ContentComponent } from './content/content.component';
import { GetQuoteComponent } from './get-quote/get-quote.component';


@NgModule({
  declarations: [CaseStudyComponent, ContentComponent, GetQuoteComponent],
  imports: [
    CommonModule,
    CaseStudyRoutingModule,
    SharedModule,
    NgbModule,
    FormsModule
  ]
})
export class CaseStudyModule { }
