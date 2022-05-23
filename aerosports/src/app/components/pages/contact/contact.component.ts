import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }
  // Header style
  headerStyle = "";
  // Footer Style
  footerStyle = "dark-bg"
  ngOnInit(): void {
  }

}
