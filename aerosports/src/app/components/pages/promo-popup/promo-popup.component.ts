import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbDateStruct, NgbCalendar, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CommonService } from 'src/app/components/services/common.service';
@Component({
  selector: 'app-promo-popup',
  templateUrl: './promo-popup.component.html',
  styleUrls: ['./promo-popup.component.css']
})
export class PromoPopupComponent implements OnInit {

 
  error: {} | undefined;
  
  constructor(public activeModal: NgbActiveModal,private route: ActivatedRoute, 
    private router: Router,
     private commonService: CommonService) { 
      this.buildInitial();
  }
 
  content: string | any;
  buildInitial(){
      if (this.commonService.location == "oakville") {
       this.commonService.location = "oakvillemississauga";
     }
      
    this.content = this.commonService.getconfig('promotion-popup').replace("{location.url}", this.commonService.location);
    this.commonService.isPromoPopupDisplayed = true;
  }

  ngOnInit(): void {
  }
}