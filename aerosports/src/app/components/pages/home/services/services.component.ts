import { Component, Input } from '@angular/core';
import { CommonService } from 'src/app/components/services/common.service';

import { HelperService } from 'src/app/components/services/helper.service';
import { Aerosports } from 'src/app/components/models/aerosports';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent extends HelperService {
  
  public pages!: Aerosports[];
  @Input()
  public pagetype:string='';
  public currentPage!: Aerosports;
  
  ngOnInit() {
    
    this.route.params.subscribe(routeParams => {
         
     if(this.pagetype=="")
     {
       this.pagetype=routeParams.path;
     }
     console.log(this.pagetype); 
     
     console.log(this.pagetype); 
     this.currentPage= this.commonService.aerosports.filter(t=>{
      return t.path==this.pagetype;

    })[0] ;
  });

  }
  constructor(public helperService: HelperService,private route: ActivatedRoute, 
    private router: Router, public commonService: CommonService) {
    super();

  }

}
