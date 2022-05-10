import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from '../../services/common.service';
 
@Component({
  selector: 'app-attractions',
  templateUrl: './attractions.component.html',
  styleUrls: ['./attractions.component.css']
})
export class AttractionsComponent implements OnInit {

 // Footer Style
 footerStyle = "tertiary-bg"
 pagetype: string | any;
 location: string | any;
 title: string = '';
 childrens: any[] = [];
 path: string = '';

  constructor(private route: ActivatedRoute, 
    private router: Router,
     private commonService: CommonService) { 
      this.buildInitial();
  }

  buildInitial(){
    this.pagetype = this.router.url.split('/').pop();      
      this.route.params.subscribe(routeParams => {
        this.location = routeParams.location;        
      });

    var d = this.commonService.aerosports.filter(s =>{
      return s.pagetype == this.pagetype;
    });

    if(d && d.length > 0){
      this.title = d[0].title === '' ? d[0].desc : d[0].title;
      this.childrens = d[0].children;
      this.path = this.commonService.location + '/' + d[0].pagetype + '/';
    }
  }

  ngOnInit(): void {
    //console.log(this.route?.parent?.snapshot.url[2].path)
  }

}
