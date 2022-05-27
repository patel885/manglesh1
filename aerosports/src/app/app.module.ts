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
import { BirthdayPartiesComponent } from './components/pages/parties-events/birthday-parties/birthday-parties.component';
import { CampProgramsComponent } from './components/pages/parties-events/camp-programs/camp-programs.component';
import { ServicesComponent } from './components/pages/services/services.component';
import { ServicesComponent as AeroSportsServiceComponent } from './components/pages/home/services/services.component';
import { BlogComponent } from './components/pages/blog/blog.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { ContactFormComponent } from './components/pages/contact/contact-form/contact-form.component';
import { PricingComponent } from './components/pages/pricing/pricing.component';



@NgModule({
  declarations: [
    AppComponent,
    ServicesComponent,
    BlogComponent,
    ContactComponent,
    ContactFormComponent],
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
    PartiesEventsComponent,
    AttractionDetailComponent,
    BirthdayPartiesComponent,
    CampProgramsComponent,
    ServicesComponent,
    AeroSportsServiceComponent,
    ServicesComponent,
    BlogComponent,
    ContactComponent,
    ContactFormComponent,
    PricingComponent 
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
