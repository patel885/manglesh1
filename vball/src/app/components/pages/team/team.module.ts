import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';
import { CountUpModule } from 'ngx-countup';

import { TeamRoutingModule } from './team-routing.module';
import { TeamComponent } from './team.component';
import { SharedModule } from '../../shared/shared.module';
import { StyleOneComponent } from './style-one/style-one.component';
import { CounterComponent } from './counter/counter.component';
import { StyleTwoComponent } from './style-two/style-two.component';


@NgModule({
  declarations: [TeamComponent, StyleOneComponent, CounterComponent, StyleTwoComponent],
  imports: [
    CommonModule,
    TeamRoutingModule,
    SharedModule,
    NgbModule,
    NgxPaginationModule,
    CountUpModule
  ]
})
export class TeamModule { }
