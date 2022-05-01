import { Component, OnInit, Type } from '@angular/core';
import { Route, Router, Routes } from '@angular/router';
import { routes } from 'src/app/app-routing.module';
import { Aerosports, PageTypes } from 'src/app/components/models/aerosports';
import { CommonService } from 'src/app/components/services/common.service';
import { AttractionDetailComponent } from '../../attractions/attraction-detail/attraction-detail.component';
import { AttractionsComponent } from '../../attractions/attractions.component';
import { GroupEventDetailComponent } from '../../groups-events/group-event-detail/group-event-detail.component';
import { GroupsEventsComponent } from '../../groups-events/groups-events.component';
import { BirthdayPartiesComponent } from '../../parties-events/birthday-parties/birthday-parties.component';
import { CampProgramsComponent } from '../../parties-events/camp-programs/camp-programs.component';
import { PartiesEventsComponent } from '../../parties-events/parties-events.component';
import { PricingPromosComponent } from '../../pricing-promos/pricing-promos.component';
import { ProgramDetailComponent } from '../../programs/program-detail/program-detail.component';
import { ProgramsComponent } from '../../programs/programs.component';
import { AboutUsComponent } from '../about-us/about-us.component';
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
      this.iterate(s, "/" + s.path);
    });

    console.log(this.modifiedRoutes);

    if(this.modifiedRoutes.length > 0){
      this.routes.unshift(...this.modifiedRoutes);
      //console.log(this.routes);
      this.router.resetConfig(this.routes);
    }
  }

  iterate(s: any, path: string){
    //console.log(s);
    if(s.children && s.children.length > 0){
      Array.from(s.children).forEach(child =>{
        this.iterate(child, path);
      });

      if(s.hascontent && s.hascontent === true){
        var route = {path: ":location" + path  ,  component: this.getComponent(s.pagetype)} as Route
        this.modifiedRoutes.push(route)
      }

    }else{      
      var route = {path: ":location" + path + (s.iscustom === 'y' ? "/" + s.path : "/:type") ,  component: this.getComponent(s.pagetype)} as Route
      this.modifiedRoutes.push(route)
      
    }

    

   
  }

  getComponent(type: string): Type<any> {
    switch (type) {
        case PageTypes.PartiesEvents: {
            return PartiesEventsComponent;
        }
        case PageTypes.Attractions: {
            return AttractionsComponent;
        }
        case PageTypes.Programs:{
          return ProgramsComponent;
        }
        case PageTypes.PricingPromos:{
          return PricingPromosComponent;
        }
        case PageTypes.GroupEvents:{
          return GroupsEventsComponent;
        }
        case PageTypes.Aboutus: {
          return AboutUsComponent;
        }
        case PageTypes.Attractionsub:{
          return AttractionDetailComponent;
        }
        case PageTypes.Partieseventssub:{
          return BirthdayPartiesComponent;
        }
        case PageTypes.Campprograms:{
          return CampProgramsComponent;
        }
        case PageTypes.Programssub:{
          return ProgramDetailComponent;
        }
        case PageTypes.Groupseventssub:{
          return GroupEventDetailComponent;
        }
        
        default:
          return HomeComponent;
    }
} 

}
