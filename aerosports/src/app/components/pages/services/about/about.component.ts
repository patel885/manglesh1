import { Component, OnInit } from '@angular/core';
import data from '../../../data/faqs.json';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  public faqs = data;
  constructor() { }

  ngOnInit(): void {
  }

}
