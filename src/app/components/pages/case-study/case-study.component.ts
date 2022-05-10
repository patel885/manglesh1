import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-case-study',
  templateUrl: './case-study.component.html',
  styleUrls: ['./case-study.component.css']
})
export class CaseStudyComponent implements OnInit {

  constructor() { }
  // Header style
  headerStyle = "";
  // Footer Style
  footerStyle = "dark-bg"

  ngOnInit(): void {
  }

}
