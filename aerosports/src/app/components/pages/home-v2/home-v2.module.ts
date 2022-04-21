import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { FormsModule } from '@angular/forms';
import { CountUpModule } from 'ngx-countup';

import { HomeV2RoutingModule } from './home-v2-routing.module';
import { HomeV2Component } from './home-v2.component';
import { SharedModule } from '../../shared/shared.module';
import { BannerComponent } from './banner/banner.component';
import { AboutTextComponent } from './about-text/about-text.component';
import { ServicesComponent } from './services/services.component';
import { GetQuoteComponent } from './get-quote/get-quote.component';
import { TeamComponent } from './team/team.component';
import { ProcessComponent } from './process/process.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { VideoComponent } from './video/video.component';
import { WhyusComponent } from './whyus/whyus.component';
import { CaseComponent } from './case/case.component';


@NgModule({
  declarations: [HomeV2Component, BannerComponent, AboutTextComponent, ServicesComponent, GetQuoteComponent, TeamComponent, ProcessComponent, BlogPostComponent, VideoComponent, WhyusComponent, CaseComponent],
  imports: [
    CommonModule,
    HomeV2RoutingModule,
    SharedModule,
    FormsModule,
    NgbModule,
    SlickCarouselModule,
    CountUpModule
  ]
})
export class HomeV2Module { }
