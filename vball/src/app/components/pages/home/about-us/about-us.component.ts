import { Component, OnInit } from '@angular/core';
import data from '../../../data/strategy.json';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
  public progressBars = data;
  constructor() { }

  ngOnInit(): void {
  }

}
