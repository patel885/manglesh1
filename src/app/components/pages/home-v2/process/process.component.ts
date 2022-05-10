import { Component, OnInit } from '@angular/core';
import data from '../../../data/workprocess.json';

@Component({
  selector: 'app-process',
  templateUrl: './process.component.html',
  styleUrls: ['./process.component.css']
})
export class ProcessComponent implements OnInit {
  public workprocess = data;    
  constructor() { }

  ngOnInit(): void {
  }

}
