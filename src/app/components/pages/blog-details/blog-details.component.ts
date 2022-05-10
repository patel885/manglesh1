import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css']
})
export class BlogDetailsComponent implements OnInit {

  constructor() { }
  // Header style
  headerStyle = "";
  // Footer Style
  footerStyle = "dark-bg"

  ngOnInit(): void {
  }

}
