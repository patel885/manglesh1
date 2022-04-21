import { Component, OnInit } from '@angular/core';
import data from '../../../data/team.json';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  public teamblock = data;
  constructor() { }
  // Settings
  settings = {
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  }

  ngOnInit(): void {
  }

}
