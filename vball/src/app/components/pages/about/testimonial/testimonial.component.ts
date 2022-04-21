import { Component, OnInit } from '@angular/core';
import data from '../../../data/testimonial.json';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css']
})
export class TestimonialComponent implements OnInit {

  public testimonials = data;
  constructor() { }
  // Settings
  settings = {
    slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      dots: false,
      nextArrow: '.basic-arrow-slider-wrap .next',
      prevArrow: '.basic-arrow-slider-wrap .prev',
      autoplay: true
  }

  ngOnInit(): void {
  }

}
