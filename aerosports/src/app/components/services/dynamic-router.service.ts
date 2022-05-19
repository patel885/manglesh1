import { Injectable, Type } from '@angular/core';

import { Route, Router } from '@angular/router';
import { routes } from 'src/app/app-routing.module';
import { PageTypes } from '../models/aerosports';
import { AttractionDetailComponent } from '../pages/attractions/attraction-detail/attraction-detail.component';
import { AttractionsComponent } from '../pages/attractions/attractions.component';
import { BirthdayPartiesComponent } from '../pages/parties-events/birthday-parties/birthday-parties.component';
import { CommonService, slideInAnimation } from './common.service';

@Injectable({
  providedIn: 'root'
})
export class DynamicRouterService {

  constructor(private router:Router, private commonService: CommonService) {
    console.log('Dynamic Router...'); 
    this.commonService.aerosprots$.subscribe(s =>{
      this.buildDynamicRoute();

    })
  }

  routes = routes;
  modifiedRoutes: Route[] = [];

 

  public buildDynamicRoute(){ 
    console.log(this.commonService.aerosports);
    this.commonService.aerosports.forEach(s =>{
      //console.log(s);
      this.iterate(s, "/" + s.path);
    });

    

    if(this.modifiedRoutes.length > 0){
      this.routes.unshift(...this.modifiedRoutes);
      //console.log(this.routes);
      this.router.resetConfig(this.routes);
    }

    var url = window.location.href;
    console.log(url);
        var urlItems = url.split('/');
        if(urlItems.length >= 5){
          this.router.navigate([window.location.pathname]);
        }

    console.log(this.modifiedRoutes);
  }

  iterate(s: any, path: string){
    //console.log(s);
    if(s.children && s.children.length > 0){
      Array.from(s.children).forEach(child =>{
        this.iterate(child, path);
      });
        var route = {path: ":location" + path  ,  component: this.getComponent(s.path,s.parentid),
         data:{
            Animation:slideInAnimation
        }} as Route
        console.log(path);
        console.log(route);
        this.modifiedRoutes.push(route)     

    }else{      
        var route = {path: ":location" + path + (s.iscustom === 'y' ? "/" + s.path : "/:type") ,  
        component: this.getComponent(s.path,s.parentid),
        data:{
          Animation:slideInAnimation
        }
      } as Route
        this.modifiedRoutes.push(route)
        
      }

    

   
  }

  getComponent(type: string, parentid:string): Type<any> {
    
    switch (type) {
        case PageTypes.PartiesEvents: {
            return AttractionsComponent;
        }
        case PageTypes.Attractions: {
            return AttractionsComponent;
        }
        case PageTypes.Programs:{
          return AttractionsComponent;
        }
        case PageTypes.PricingPromos:{
          return AttractionsComponent;
        }
        case PageTypes.GroupEvents:{
          return AttractionsComponent;
        }
        case PageTypes.Aboutus: {
          return AttractionsComponent;
        }
        case PageTypes.Attractionsub:{
          return AttractionsComponent;
        }
        case PageTypes.BirthdayParties:{
          return BirthdayPartiesComponent;
        }
        
        case PageTypes.Programssub:{
          return AttractionsComponent;
        }
        case PageTypes.Groupseventssub:{
          return AttractionDetailComponent;
        }
    
        default:
          return AttractionDetailComponent;
    }
} 
}
