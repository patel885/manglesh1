import { Component, OnInit } from '@angular/core';
import data from '../../../data/blocks.json';

@Component({
  selector: 'app-whyus',
  templateUrl: './whyus.component.html',
  styleUrls: ['./whyus.component.css']
})
export class WhyusComponent implements OnInit {
  public blocks = data;
  constructor() { } 

  ngOnInit(): void {
  }

}
