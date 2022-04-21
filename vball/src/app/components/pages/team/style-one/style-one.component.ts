import { Component, OnInit } from '@angular/core';
import data from '../../../data/team.json';

@Component({
  selector: 'app-style-one',
  templateUrl: './style-one.component.html',
  styleUrls: ['./style-one.component.css']
})
export class StyleOneComponent implements OnInit {
  // pagination
  page: number = 1;
  // Data
  public teamblock = data;
  constructor() { }

  ngOnInit(): void {
  }

}
