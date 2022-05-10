import { Component } from '@angular/core';
import { Aerosports } from '../../models/aerosports';
import { CommonService } from '../../services/common.service';
import { HelperService } from '../../services/helper.service';

@Component({
  selector: 'app-mobile-menu',
  templateUrl: './mobile-menu.component.html',
  styleUrls: ['./mobile-menu.component.css']
})
export class MobileMenuComponent extends HelperService {
  public navigation!: Aerosports[];
  constructor(public helperService: HelperService,
    public commonService: CommonService
    
    ) {
    super();
    this.navigation= commonService.aerosports;
  }
 
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
