import { Component, OnInit } from '@angular/core';
import data from '../../../data/blocks.json';

@Component({
  selector: 'app-about-text',
  templateUrl: './about-text.component.html',
  styleUrls: ['./about-text.component.css']
})
export class AboutTextComponent implements OnInit {
  public blocks = data;
  constructor() { } 

  ngOnInit(): void {
  }

}
