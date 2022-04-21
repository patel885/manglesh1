import { Component, OnInit } from '@angular/core';
import data from '../../../data/team.json';

@Component({
  selector: 'app-style-two',
  templateUrl: './style-two.component.html',
  styleUrls: ['./style-two.component.css']
})
export class StyleTwoComponent implements OnInit {
  // pagination
  page: number = 1;
  // Data
  public teamblock = data;
  constructor() { }

  ngOnInit(): void {
  }

}
