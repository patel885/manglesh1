import { Component, OnInit } from '@angular/core';
import { Route, Router, Routes } from '@angular/router';
import { CommonService } from 'src/app/components/services/common.service';



@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {

  // Header style
  headerStyle = "tertiary-bg";
  // Footer Style
  footerStyle = "tertiary-bg"

  constructor(public commonService: CommonService, private router: Router) { 
    //console.log(this.commonService.locationData);
    console.log(this.commonService.aerosports);
    //this.buildDynamicRoute();
  }

  ngOnInit(): void {
  }

  onLocationClick(location: string){
    //console.log(location);
    this.commonService.location = location;
    //this.router.navigate([location + '/home']);
    window.location.href=location + '/';
  }

  

}
