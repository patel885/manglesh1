import { Component, OnInit } from '@angular/core';
import data from '../../../data/plans.json';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.css']
})
export class PlansComponent implements OnInit {
  public plans = data;
  constructor() { }

  ngOnInit(): void {
  }

}
