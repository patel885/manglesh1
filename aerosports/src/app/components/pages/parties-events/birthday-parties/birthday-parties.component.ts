import { Component, OnInit } from '@angular/core';
import data from '../../../data/plans.json';
import { CommonService } from '../../../services/common.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Aerosports, BirthDayPackages, Config } from 'src/app/components/models/aerosports';

@Component({
  selector: 'app-birthday-parties',
  templateUrl: './birthday-parties.component.html',
  styleUrls: ['./birthday-parties.component.css']
})
export class BirthdayPartiesComponent implements OnInit {
  pagetype: string | any;
  location: string | any;
  bps!: BirthDayPackages[];
  addons!: Config[];

  constructor(private route: ActivatedRoute, 
     private router: Router,
      private commonService: CommonService) { 
       this.buildInitial();
   }

   buildInitial(){
    this.route.params.subscribe(routeParams => {  
      console.log(routeParams.location);   
    this.bps= this.commonService.BirthDayPackages.filter(t=>{
      return t.location==routeParams.location;
      }) as BirthDayPackages[];      

      this.addons = this.commonService.config.filter(t=>{
        return t.location==routeParams.location && t.key=="birthday-addon"
      } ) as Config[];
      console.log("addons");
      console.log(this.addons);
    console.log(this.bps);
    });
   }

  ngOnInit(): void {
  }

}
