import { Component, OnInit } from '@angular/core';
import data from '../../../data/testimonial.json';
import author from '../../../data/team.json';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent implements OnInit {
  public testimonials = data;
  constructor() { }
  public getAuthor(items: string | any[]) {
    var elems = author.filter((item: { id: string; }) => {
      return items.includes(item.id)
    });
    return elems;
  }
  // Settings
  settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    autoplay: true,
    centerMode: true,
    centerPadding: 0,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  }

  ngOnInit(): void {
  }

}
