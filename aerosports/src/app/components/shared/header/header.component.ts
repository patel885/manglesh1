import { Component, Input } from '@angular/core';
import { HelperService } from '../../services/helper.service';
import data from '../../data/navigation.json';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent extends HelperService  {
  public navigation = data;
  constructor(public helperService: HelperService, public commonService: CommonService) {
    super();
  }
  ngOnInit(): void { 
  }
  @Input() layout: number | string | undefined;

  onLinkClick(link: string){
    console.log(link);
  }

}
