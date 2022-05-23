import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/components/services/common.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  
  constructor(public  commonService: CommonService) { 

  }
  getconfig(key:string): string {
    var s = this.commonService.config.filter(t=>{
      return t.key==key;
    }) [0].value;
    return s;
    
  }

  ngOnInit(): void {
  }

}
