import { Component, Input, OnDestroy } from '@angular/core';
import { HelperService } from '../../services/helper.service';
import { CommonService } from '../../services/common.service';
import { Aerosports } from '../../models/aerosports';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ContactComponent } from '../../pages/contact/contact.component';
import { ContactFormComponent } from '../../pages/contact/contact-form/contact-form.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent extends HelperService implements OnDestroy  {
  public navigation!: Aerosports[];
  public location!:any;
  page!: Aerosports;
  pagetype!: string | any;
  someSubscription!: any;
  path!:string | any;
  settings = {
    slidesToShow: 1,
    slidesToScroll: 2,
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
    this.navigation = this.commonService.aerosports;
    this.location=this.commonService.locations[0];
    console.log('navigation');
    this.pagetype = this.router.url.split('/').pop();
    
    var urlitems=this.router.url.split('/');
    this.path=this.router.url.split('/').pop();
    console.log(urlitems);
    console.log(this.path);
       if(urlitems.length==2)
       {
          this.path="home";
       }
       console.log(this.path);
       this.page =this.commonService.allPages.filter(m=>{
        return m.path== this.path; 
        })[0];



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
     
   
  }
  ngOnDestroy(): void {
    if (this.someSubscription) {
      this.someSubscription.unsubscribe();
    }
  }
  getconfig(key:string): string {
    console.log(this.commonService.config);
    var s = this.commonService.config.filter(t=>{
      return t.key==key;
    }) [0].value;
    return s;
    
  }
  ngOnInit(): void { 
  }
  @Input() layout: number | string | undefined = "tertiary-bg" ;
  @Input() hideMenu: boolean = false;

  onLinkClick(link: string){
    console.log(link);
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
