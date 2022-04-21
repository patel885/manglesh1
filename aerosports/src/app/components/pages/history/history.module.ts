import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HistoryRoutingModule } from './history-routing.module';
import { HistoryComponent } from './history.component';
import { SharedModule } from '../../shared/shared.module';
import { HistoryBlockComponent } from './history-block/history-block.component';
import { VideoComponent } from './video/video.component';


@NgModule({
  declarations: [HistoryComponent, HistoryBlockComponent, VideoComponent],
  imports: [
    CommonModule,
    HistoryRoutingModule,
    SharedModule,
    NgbModule
  ]
})
export class HistoryModule { }
