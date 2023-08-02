import { Component, OnInit } from "@angular/core";
import { CommonService } from "../services/common.service";

@Component({
  selector: "app-funckySection",
  templateUrl: "./funckySection.component.html",
  styleUrls: ["./funckySection.component.scss"]
})

export class FunckySectionComponent implements OnInit {
  sectionText!:string;

  constructor(public commonService: CommonService,) { 

    this.sectionText = this.commonService.config.filter(t=>{
      return t.key=="home-birthdaysection";
    }) [0].value;

  }

  ngOnInit() {

  }
 
}
