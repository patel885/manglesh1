import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { BreadcrumbService, Breadcrumb } from 'angular-crumbs';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { DynamicRouterService } from './components/services/dynamic-router.service';
import { CommonService, slideInAnimation } from './components/services/common.service';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
declare let gtag: Function;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    Location, {
      provide: LocationStrategy,
      useClass: PathLocationStrategy
    }
  ],
  animations: [
    slideInAnimation
  ]
})

export class AppComponent implements OnInit {

  private titleFormat = "Aerosports {{location}} | Best {{feature}} in Ontario | #1 indoor Trampoline Park";
  private metaDescFormat = "Aerosports {{location}} a Huge indoor trampoline park with Ninja Warrior Course, open jump, foam pits, {{feature}} basketball area & more. Great for birthday parties & events!";
  private metaTitleFormat = "{{location}} ON {{feature}} | Aerosports Trampoline Park+";
  private metaOgDesc = "Aerosports Offers a variety of exciting trampoline park attractions and programs in {{location}} ON, including {{feature}}.Best place for birthday parties";
  private locationFormat = '{{location}}';
  private featureFormat = '{{feature}}';

  constructor(private titleService: Title, 
    private metaService: Meta,
    private breadcrumbService: BreadcrumbService,
    dynamicService: DynamicRouterService,
    private commonService: CommonService, private router: Router, 
    private route:ActivatedRoute
    
    ) {
      this.router.events.subscribe(event => {
        if(event instanceof NavigationEnd){
            console.log("COMPONENTS TAGS");
            console.log(this.commonService.locations[0].tag);
            
                 gtag('config', this.commonService.locations[0].tag,
                 {
                   'page_path': event.urlAfterRedirects
                 }
                );
                gtag('config', 'UA-50747130-3', 
                  {
                    'page_path': event.urlAfterRedirects
                  }
                 );
         }
      }
   );
     
    //console.log('applog constructor');    
  }
  
  ngOnInit(): void {
    
    this.breadcrumbService.breadcrumbChanged.subscribe(crumbs => {
      //this.titleService.setTitle(this.createTitle(crumbs));
     // console.log('applog nginit'); 
     this.buildSEO();
    });
  }

  buildSEO(){
    
    var pType = this.router.url.split('/').pop();  
    //console.log(pType); 
    //console.log(this.commonService.allPages);  
    var d = this.commonService.allPages.filter(s =>{
      return s.path == pType;
    });


      this.titleService.setTitle(this.replaceValues(this.titleFormat, d));

      this.createOrUpdateTag('robots','index,follow',d);
      this.createOrUpdateTag('description',this.metaDescFormat,d);
      this.createOrUpdateTag('og:title',this.metaTitleFormat,d);
      this.createOrUpdateTag('og:description',this.metaOgDesc,d);
      this.createOrUpdateTag('og:type',"website",d);
      if(d[0])
        this.createOrUpdateTag('og:image',d[0].headerimage,d);
      this.createOrUpdateTag('og:url',window.location.href,d);
      // this.metaService.addTags([
      //   {name: 'robots', content: 'index,follow'},
      //   {name: 'description', content: this.replaceValues(this.metaDescFormat,d)},
      //   {name:'og:title', content: this.replaceValues(this.metaTitleFormat,d)},
      //   {name:'og:description', content: this.replaceValues(this.metaOgDesc,d)},
      //   {name: 'og:type', content: 'website'},
      //   {name: 'robots', content: 'index, follow'},
      //   {name:'og:image',content:''},
      //   {name:'og:url', content: window.location.href}
      // ]);
}

createOrUpdateTag(nameValue: string, content: string, d:any){
  //console.log(this.metaService.getTag("name='" + nameValue + "'"));
  this.metaService.getTag("name='" + nameValue + "'") ? 
          this.metaService.updateTag({name: nameValue, content: this.replaceValues(content,d)},"name='"+ nameValue +"'") : 
          this.metaService.addTag({name: nameValue, content: this.replaceValues(content,d)});

}

replaceValues(val: String, d:any){
  //console.log(d);

  var data = val.replace(this.locationFormat,this.commonService.location);
  data =  data.replace(this.featureFormat, d.length > 0 ? d[0].desc : '');
  return data;
  //console.log(title);
}

  onActivate(_event:any){
    window.scroll(0,0);
  }
  private createTitle(routesCollection: Breadcrumb[]) {
    const title = 'Aerosports Teampoline Park|Best Fun and Birthday Party Place';

    const titles = routesCollection.filter((route) => route.displayName);

    if (!titles.length) { return title; }

    const routeTitle = this.titlesToString(titles);
   // console.log('routeTitle' + routeTitle); 
    return `${title}${routeTitle}`;
  }

  private titlesToString(titles: any[]) {
    return titles.reduce((prev, curr) => {
      return `${prev} | ${curr.displayName}`;
    }, '');
  }


}
