import { Injectable, Type } from '@angular/core';

import { Route, Router } from '@angular/router';
import { routes } from 'src/app/app-routing.module';
import { PageTypes } from '../models/aerosports';
import { AttractionDetailComponent } from '../pages/attractions/attraction-detail/attraction-detail.component';
import { AttractionsComponent } from '../pages/attractions/attractions.component';
import { BlogDetailsComponent } from '../pages/blog-details/blog-details.component';
import { BirthdayPartiesComponent } from '../pages/parties-events/birthday-parties/birthday-parties.component';
import { PricingComponent } from '../pages/pricing/pricing.component';
import { UnsubscribeComponent } from '../pages/unsubscribe/unsubscribe.component';
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
    this.commonService.allPages.forEach(s =>{
      this.iterate(s, "/" + s.path);
    });
    console.log(this.commonService.blogs);

    this.commonService.blogs.forEach(b =>{
     var route = {path: ":location/blogs/" + b.id  ,  component: BlogDetailsComponent} as Route;
      this.modifiedRoutes.push(route)    ; 
    });
    var route = {path: "unsubscribe"   ,  component: UnsubscribeComponent} as Route;
    this.modifiedRoutes.push(route)    ; 


  if(this.modifiedRoutes.length > 0){
    this.routes.unshift(...this.modifiedRoutes);
    this.router.resetConfig(this.routes);
  }
  var url = window.location.href;
      var urlItems = url.split('/');
      if(urlItems.length >= 4){
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
    }
    if(s.path==s.pagetype)
    {
      var route = {path: ":location" + path,  component: this.getComponent(s.path)} as Route;
      this.modifiedRoutes.push(route)    ; 
    }
    else{
      var route = {path: ":location" + path + (s.parentid === '' ? '' : "/:type")  ,  component: this.getComponent(s.path)} as Route;
        this.modifiedRoutes.push(route)    ; 
    }
  }

  getComponent(type: string): Type<any> {
    
  
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
        case  PageTypes.PricingComponent:{
             console.log('PricingComponent');
            return PricingComponent;
        }
        case  PageTypes.Unsubscribe:{
                   return UnsubscribeComponent;
        }
    
        default:
          return AttractionDetailComponent;
    }
} 
}
