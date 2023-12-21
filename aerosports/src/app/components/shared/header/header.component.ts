import { Component, Input, OnDestroy } from '@angular/core';
import { HelperService } from '../../services/helper.service';
import { CommonService } from '../../services/common.service';
import { Aerosports } from '../../models/aerosports';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {PromoPopupComponent} from '../../pages/promo-popup/promo-popup.component';

import { ContactFormComponent } from '../../pages/contact/contact-form/contact-form.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent extends HelperService implements OnDestroy  {
  public navigation!: Aerosports[];
  public location!:any;
  page!: any;
  pagetype!: string | any;
  someSubscription!: any;
  path!:string | any;
  settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    autoplay: true
  };
  constructor(private route: ActivatedRoute, 
    private router: Router,public helperService: HelperService, 
    public commonService: CommonService,
    public modalService: NgbModal) {
    super();
    //console.log(this.commonService.aerosports);
    this.navigation = this.commonService.aerosports.filter(t=>{
      t.children=t.children.filter((s: { isactive: string; })=>
        {return s.isactive=='1';});
      return t.isactive=='1';
    });
    this.location=this.commonService.locations[0];
    //console.log(this.navigation);
    this.pagetype = this.router.url.split('/').pop();
    
    var urlitems=this.router.url.split('/');
    this.path=this.router.url.split('/').pop();
    //console.log(urlitems);
    //console.log(this.path);
       if(urlitems.length==2)
       {
          this.path="home";
       }
      // console.log(this.path);
       if(this.router.url.indexOf("blog-details")>0)
       {
        this.page =this.commonService.allPages.filter(m=>{
          return m.path== "blog-details"; 
          })[0];
       }
       else{
       this.page =this.commonService.allPages.filter(m=>{
        return m.path== this.path; 
        })[0];
      }
      //console.log("header")
       //console.log(this.page);

      this.router.routeReuseStrategy.shouldReuseRoute = function () {
        return false;
      };
      this.someSubscription = this.router.events.subscribe((event) => {
        if (event instanceof NavigationEnd) {
          // Here is the dashing line comes in the picture.
          // You need to tell the router that, you didn't visit or load the page previously, so mark the navigated flag to false as below.
          this.router.navigated = false;
        }
      });
   
      if(this.commonService.allPages.filter(m=>{
        return m.path== 'membership'; 
        }).length>0)
        {

           if(!this.commonService.isPromoPopupDisplayed)
              this.modalService.open(PromoPopupComponent, {size: 'lg', keyboard: false, centered: false});  
        }
   
  }
  ngOnDestroy(): void {
    if (this.someSubscription) {
      this.someSubscription.unsubscribe();
    }
  }
  getconfig(key:string): string {
//console.log(s);
//console.log(this.commonService.config);
var s: any[];
    s = this.commonService.config.filter(t=>{
      return t.key==key;
    }) ;
   // console.log(s);
if(s.length>0)
   return s[0].value;
   else 
   return '';    
    
  }
  
  getroller(): string {
    //console.log(this.page);
    //console.log(this.getconfig(this.path+'-roller-url'));
    if(this.getconfig(this.path+'-roller-url')!='')
    return this.getconfig(this.path+'-roller-url');
      
    


    if(this.page.booknowlink!='')
    {
      var urlLocation=this.commonService.location==='oakville'?'oakvillemississauga':this.commonService.location;
      return this.page.booknowlink.replace("{0}",'aerosports'+urlLocation);
    }
    
    return this.getconfig('estorebase');
    

    
   
         

   /* var urlLocation=this.commonService.location==='oakville'?'oakvillemississauga':this.commonService.location;


    if(this.page.booknowlink!='')
    {
      return this.page.booknowlink.replace("{0}",'aerosports'+urlLocation);
    }
     else
     {
      return this.getconfig('estorebase');
     } */

    }
  ngOnInit(): void { 
  }
  @Input() layout: number | string | undefined = "tertiary-bg" ;
  @Input() hideMenu: boolean = false;

  onLinkClick(link: string){
   // console.log(link);
  }

  hasLink(item: any){
    
    return true;
  }

  hasChildren(item: any){
    return item.children === undefined || item.children.length <= 0 ? false : true;
  }

  onInquireClick(){
    this.modalService.open(ContactFormComponent, {backdrop: 'static',size: 'lg', keyboard: false, centered: true});
    
  }

}
