import { Component } from '@angular/core';
import data from '../../../data/banner.json';
import { HelperService } from 'src/app/components/services/helper.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent extends HelperService {
  public bannerpost = data;
  // Settings
  settings = {
    slidesToShow: 1,
    slidesToScroll: 2,
    arrows: true,
    dots: true,
    autoplay: true
  };

}
