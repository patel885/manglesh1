import { Component } from '@angular/core';
import { CommonService } from 'src/app/components/services/common.service';
import { HelperService } from 'src/app/components/services/helper.service';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css']
})
export class BlogPostComponent  {
  
  ngOnInit() {
    
  }
  public getInitialDate(string: string) {
    var names = string.split(' '),
      initials = '<span>' + names[0].substring(0, 2).toString().replace(/\D/g, "") + '</span>';
    if (names.length > 1) {
      initials += '<span> ' + names[names.length - 2].substring(0, 3).toString() + '</span>';
    }
    return initials;
  }
  
  constructor(public helperService: HelperService, public commonService: CommonService) {

  }


}
