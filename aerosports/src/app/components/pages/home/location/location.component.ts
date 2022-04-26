import { Component, OnInit, Type } from '@angular/core';
import { Route, Router, Routes } from '@angular/router';
import { routes } from 'src/app/app-routing.module';
import { Aerosports, PageTypes } from 'src/app/components/models/aerosports';
import { CommonService } from 'src/app/components/services/common.service';
import { AttractionsComponent } from '../../attractions/attractions.component';
import { PartiesEventsComponent } from '../../parties-events/parties-events.component';
import { HomeComponent } from '../home.component';


@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {
  routes = routes;
  modifiedRoutes: Route[] = [];
  // Header style
  headerStyle = "tertiary-bg";
  // Footer Style
  footerStyle = "tertiary-bg"

  constructor(public commonService: CommonService, private router: Router) { 
    //console.log(this.commonService.locationData);
    console.log(this.commonService.aerosports);
    this.buildDynamicRoute();
  }

  ngOnInit(): void {
  }

  onLocationClick(location: string){
    //console.log(location);
    this.commonService.location = location;
    this.router.navigate([location + '/home']);
  }

  private buildDynamicRoute(){
    this.commonService.aerosports.forEach(s =>{
      //console.log(s);
      this.iterate(s, "/" + s.data.path);
    });

    if(this.modifiedRoutes.length > 0){
      this.routes.unshift(...this.modifiedRoutes);
      console.log(this.routes);
      this.router.resetConfig(this.routes);
    }
  }

  iterate(s: Aerosports, path: string){
    if(s.children){
      Array.from(s.children).forEach(child =>{
        this.iterate(child, path);
      })
    }else{
      
      console.log(this.routes);
      console.log(s);
      console.log(path);
      var route = {path: ":location" + path + "/:type" ,  component: this.getComponent(s.data.type)} as Route
      this.modifiedRoutes.push(route)
      
    }

   
  }

  getComponent(type: string): Type<any> {
    switch (type) {
        case PageTypes.Birthday: {
            return PartiesEventsComponent;
        }
        case PageTypes.Aeroslam: {
            return AttractionsComponent;
        }
        case PageTypes.OpenJumps :{
            return AttractionsComponent;
        }
        default:
          return HomeComponent;
    }
} 

}
