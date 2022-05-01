import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CountUpModule } from 'ngx-countup';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { SharedModule } from '../../shared/shared.module';
import { HomeRoutingModule } from '../home/home-routing.module';
import { ProgramsComponent } from './programs.component';
import { ProgramDetailComponent } from './program-detail/program-detail.component';



@NgModule({
  declarations: [ProgramsComponent, ProgramDetailComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    NgbModule,
    SlickCarouselModule,
    CountUpModule
  ]
})
export class ProgramsModule { }
