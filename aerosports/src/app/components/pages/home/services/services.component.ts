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

  // Footer Style
 footerStyle = "tertiary-bg"
 //public pagetype: string | any;
 location: string | any;
 title: string = '';
 childrens: any[] = [];
 path: string = '';
  
  ngOnInit() {
    this.buildInitial();
    
  }

  buildInitial(){
    var pType = this.router.url.split('/').pop();
    if(this.pagetype === "")
      this.pagetype = pType === undefined ? '' : pType;

    console.log(this.pagetype);

      this.route.params.subscribe(routeParams => {
        this.location = routeParams.location;        
      });

    var d = this.commonService.aerosports.filter(s =>{
      return s.pagetype == this.pagetype;
    });

    if(d && d.length > 0){
      // this.title = d[0].title === '' ? d[0].desc : d[0].title;
      // this.childrens = d[0].children;
      // this.path = this.commonService.location + '/' + d[0].pagetype + '/';
      this.currentPage = d[0];
    }
  }
  
  constructor(public helperService: HelperService,private route: ActivatedRoute, 
    private router: Router, public commonService: CommonService) {
    super();
    console.log('Services constructor...');

  }

}
