import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BreadcrumbModule } from 'angular-crumbs';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AttractionsComponent } from './components/pages/attractions/attractions.component';
import { PartiesEventsComponent } from './components/pages/parties-events/parties-events.component';
import { CommonService } from './components/services/common.service';
import { AttractionDetailComponent } from './components/pages/attractions/attraction-detail/attraction-detail.component';
import { ProgramsComponent } from './components/pages/programs/programs.component';
import { PricingPromosComponent } from './components/pages/pricing-promos/pricing-promos.component';
import { GroupsEventsComponent } from './components/pages/groups-events/groups-events.component';
import { AboutUsComponent } from './components/pages/about-us/about-us.component';
import { BirthdayPartiesComponent } from './components/pages/parties-events/birthday-parties/birthday-parties.component';
import { CampProgramsComponent } from './components/pages/parties-events/camp-programs/camp-programs.component';
import { ProgramDetailComponent } from './components/pages/programs/program-detail/program-detail.component';
import { GroupEventDetailComponent } from './components/pages/groups-events/group-event-detail/group-event-detail.component';




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BreadcrumbModule,
    NgbModule,
    HttpClientModule,
    SlickCarouselModule,

  ],
  providers: [CommonService,{
    provide: APP_INITIALIZER,
    useFactory: (commonService: CommonService) => () => commonService.load(),
    deps:[CommonService],
    multi:true
  }],
  bootstrap: [AppComponent],
  entryComponents:[
    AttractionsComponent,
    PartiesEventsComponent,
    AttractionDetailComponent,
    ProgramsComponent,
    PricingPromosComponent,
    GroupsEventsComponent,
    AboutUsComponent,
    BirthdayPartiesComponent,
    CampProgramsComponent,
    ProgramDetailComponent,
    GroupEventDetailComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
