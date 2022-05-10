import { Component } from '@angular/core';
import { BlogHelperService } from '../../services/blog-helper.service';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-blog-sidebar',
  templateUrl: './blog-sidebar.component.html',
  styleUrls: ['./blog-sidebar.component.css']
})
export class BlogSidebarComponent  {
  commonService:CommonService
//  recentPost!:blog;
  constructor (public commonService1: CommonService)
  {
    this.commonService=commonService1;
}

}
