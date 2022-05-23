import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Aerosports } from '../../models/aerosports';
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
  constructor (public commonService1: CommonService,private router: Router)
  {
    this.commonService=commonService1;
}
ngOnInit(): void {
  console.log("attactions");
  console.log(this.commonService.aerosports);
   
    console.log(this.commonService.aerosports.filter(t=>{return t.path.toUpperCase() =="aboutus".toUpperCase()}));
    
    this.navigation= this.commonService.aerosports.filter(t=>{return t.path.toUpperCase() =="attractions".toUpperCase()})[0].children;
    this.aboutUsLinks=this.commonService.aerosports.filter(t=>{ return t.path.toUpperCase() =="aboutus".toUpperCase()})[0].children;
    
  //  this.recentPost=bloghelpr.recentPost();
    
}

}
