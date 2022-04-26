import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
 
@Component({
  selector: 'app-attractions',
  templateUrl: './attractions.component.html',
  styleUrls: ['./attractions.component.css']
})
export class AttractionsComponent implements OnInit {
 // Header style
 headerStyle = "tertiary-bg";
 // Footer Style
 footerStyle = "tertiary-bg"
  constructor(private route: ActivatedRoute) { 
    // console.log(this.route.snapshot.params['location']);
    // console.log(this.route.snapshot.params['type']);

    this.route.params.subscribe(routeParams => {
      console.log(routeParams.location);
      console.log(routeParams.type);
    });
  }

  ngOnInit(): void {
  }

}
