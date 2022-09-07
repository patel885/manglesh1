import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../../services/common.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Aerosports } from 'src/app/components/models/aerosports';

@Component({
  selector: 'app-attraction-detail',
  templateUrl: './attraction-detail.component.html',
  styleUrls: ['./attraction-detail.component.css']
})
export class AttractionDetailComponent implements OnInit {

  footerStyle = "tertiary-bg"
  pagetype: string | any;
  location: string | any;
  page!: Aerosports;
  settings = {
    slidesToShow: 1,
    slidesToScroll: 2,
    arrows: false,
    dots: false,
    autoplay: true
  };
  constructor(private route: ActivatedRoute, 
     private router: Router,
      private commonService: CommonService) { 
       this.buildInitial();
   }
   ngOnInit(): void {
    
  }

   buildInitial(){
        this.route.params.subscribe(routeParams => {
         this.location = routeParams.location;   
         this.pagetype = routeParams.type;   
         console.log("attraction details");
         
       this.page= this.commonService.allPages.filter(t=>{
        return t.path==routeParams.type;
        })[0] as Aerosports;
  
       });
       if(!this.page)
        this.page =this.commonService.currentPage;


     
   }
 
 
}
