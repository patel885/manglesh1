import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Aerosports } from '../../models/aerosports';
import { BlogHelperService } from '../../services/blog-helper.service';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  
  @Input() layout: number | string | undefined = "tertiary-bg";
  @Input() logo: number | string | undefined;
  public navigation!: Aerosports[];
  public location: string | any;
  public aboutUsLinks!:Aerosports[];
  commonService:CommonService
//  recentPost!:blog;
  constructor (public commonService1: CommonService,private router: Router,bloghelpr: BlogHelperService)
  {
    this.commonService=commonService1;
}
ngOnInit(): void {
  console.log("attactions");
  console.log(this.commonService.aerosports);
   
    console.log(this.commonService.aerosports.filter(t=>{return t.path =="aboutus"}));
    
    this.navigation= this.commonService.aerosports.filter(t=>{return t.path =="attractions"})[0].children;
    this.aboutUsLinks=this.commonService.aerosports.filter(t=>{ return t.path =="aboutus"})[0].children;
    
  //  this.recentPost=bloghelpr.recentPost();
    
}

}
