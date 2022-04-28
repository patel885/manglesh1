import { Component, Input } from '@angular/core';
import { HelperService } from '../../services/helper.service';
import data from '../../data/navigation.json';
import { CommonService } from '../../services/common.service';
import { Aerosports } from '../../models/aerosports';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent extends HelperService  {
  public navigation!: Aerosports[];
  constructor(public helperService: HelperService, public commonService: CommonService) {
    super();
    //console.log(this.commonService.aerosports);
    this.navigation = this.commonService.aerosports;
  }
  ngOnInit(): void { 
  }
  @Input() layout: number | string | undefined = "tertiary-bg" ;
  @Input() hideMenu: boolean = false;

  onLinkClick(link: string){
    console.log(link);
  }

  hasLink(item: any){
    var output = false;
    //console.log(item);
    if(item.hascontent && item.hascontent === true){
      output = true;
    }
    return output;
  }

  hasChildren(item: any){
    return item.children === undefined || item.children.length <= 0 ? false : true;
  }

}
