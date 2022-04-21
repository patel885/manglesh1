import { Component, OnInit } from '@angular/core';
import data from '../../../data/strategy.json';

@Component({
  selector: 'app-strategy',
  templateUrl: './strategy.component.html',
  styleUrls: ['./strategy.component.css']
})
export class StrategyComponent implements OnInit {

  constructor() { }
  public progressBars = data;

  ngOnInit(): void {
  }

}
