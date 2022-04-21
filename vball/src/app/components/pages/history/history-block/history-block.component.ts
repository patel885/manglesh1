import { Component, OnInit } from '@angular/core';
import data from '../../../data/history.json';

@Component({
  selector: 'app-history-block',
  templateUrl: './history-block.component.html',
  styleUrls: ['./history-block.component.css']
})
export class HistoryBlockComponent implements OnInit {
  public history = data
  constructor() { }

  ngOnInit(): void {
  }

}
