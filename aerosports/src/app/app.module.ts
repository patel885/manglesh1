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
import { Observable, of } from 'rxjs';




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
    SlickCarouselModule
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
    PartiesEventsComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
