import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupsEventsComponent } from './groups-events.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CountUpModule } from 'ngx-countup';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { SharedModule } from '../../shared/shared.module';
import { HomeRoutingModule } from '../home/home-routing.module';
import { GroupEventDetailComponent } from './group-event-detail/group-event-detail.component';



@NgModule({
  declarations: [GroupsEventsComponent, GroupEventDetailComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    NgbModule,
    SlickCarouselModule,
    CountUpModule
  ]
})
export class GroupsEventsModule { }
