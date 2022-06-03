import { Component, NgModule, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { FooterComponent } from "../../shared/footer/footer.component";
import { HeaderComponent } from "../../shared/header/header.component";

@Component({
  selector: "app-pricing",
  templateUrl: "./pricing.component.html",
  styleUrls: ["./pricing.component.scss"]
})


export class PricingComponent implements OnInit {
  
  headerStyle = "tertiary-bg";
  // Footer Style
  footerStyle = "tertiary-bg"
  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(routeParams => {
      
    });
   }

  ngOnInit() {
    console.log('inside console');

  }
}
