import { Component, Input, OnInit } from "@angular/core";
import { CommonService } from "src/app/components/services/common.service";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.scss"]
})

export class ContactComponent implements OnInit {
  footerStyle = "tertiary-bg"
  location!: any;
  constructor(private commonService: CommonService) { 
        this.location= commonService.locations[0];
   }
    
  
   
   ngOnInit(): void {
    
  }

   buildInitial(){
         
       
     
   }

}
