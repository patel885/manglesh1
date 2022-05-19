import { Component, Input } from '@angular/core';
import { HelperService } from '../../services/helper.service';
import { CommonService } from '../../services/common.service';
import { Aerosports } from '../../models/aerosports';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent extends HelperService  {
  public navigation!: Aerosports[];
  public location!:any;
  page!: Aerosports;
  pagetype!: string | any;
  
  settings = {
    slidesToShow: 1,
    slidesToScroll: 2,
    arrows: false,
    dots: false,
    autoplay: true
  };
  constructor(private route: ActivatedRoute, 
    private router: Router,public helperService: HelperService, public commonService: CommonService) {
    super();
    //console.log(this.commonService.aerosports);
    this.navigation = this.commonService.aerosports;
    this.location=this.commonService.locations[0];
    console.log('navigation');
    console.log(this.navigation);
    this.pagetype = this.router.url.split('/').pop();
  
      console.log("attractions" + this.pagetype);

      this.route.params.subscribe(routeParams => {
        this.location = routeParams.location;    
       // this.pagetype = routeParams.pagetype;
     
      });

      this.page = this.commonService.allPages.filter(s =>{
        return s.path == this.pagetype;
      })[0];
     
    console.log(this.page);
   
  }
  getconfig(key:string): string {
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

}
