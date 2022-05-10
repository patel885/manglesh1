import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-parties-events',
  templateUrl: './parties-events.component.html',
  styleUrls: ['./parties-events.component.css']
})
export class PartiesEventsComponent implements OnInit {

 // Footer Style
 footerStyle = "tertiary-bg"
  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(routeParams => {
      console.log(routeParams.location);
      console.log(routeParams.type);
    });
   }

  ngOnInit(): void {
  }

}
