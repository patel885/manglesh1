import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-standard',
  templateUrl: './blog-standard.component.html',
  styleUrls: ['./blog-standard.component.css']
})
export class BlogStandardComponent implements OnInit {

  constructor() { }
  // Header style
  headerStyle = "";
  // Footer Style
  footerStyle = "dark-bg"

  ngOnInit(): void {
  }

}
