import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Blogs } from '../../models/aerosports';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css']
})
export class BlogDetailsComponent implements OnInit {
commonService !:CommonService;

  constructor(private route: ActivatedRoute, 
    private router: Router,public cs:CommonService) { 
        this.commonService=cs;
      this.route.params.subscribe(routeParams => {
               
       this.blog= (cs.blogs).filter(t=>{
        return t.id==routeParams.id;
        });
      
       });
   
      console.log(cs.blogs);
    }
  // Header style
  headerStyle = "";
  // Footer Style
  footerStyle = "dark-bg"
  public blog :any[]=[];

  ngOnInit(): void {
  }
  public postnavigation(items: string | any[], index: number) {
    var output = [],
      id, item;
    if (items[index - 1] !== undefined && index - 1 !== -1) {
      item = items[index - 1];
      id = item.id;
      // Show the previous button 
      output.push("<a href='/"+this.commonService.location+"/blog-details/" + item.id + "' class='sigma_single-pagination-item pagination-prev'> <span>Previous Post</span><h6>" + item.title.slice(0, 20) + "</h6> </a>");
    }
    if (items[index + 1] !== undefined && index <= items.length - 1) {
      // Show next button 
      item = items[index + 1];
      id = item.id;
      output.push("<a href='"+this.commonService.location+"/blog-details/" + item.id + "' class='sigma_single-pagination-item pagination-next'> <span>Next Post</span><h6>" + item.title.slice(0, 20) + "</h6> </a>");
    }

    return output;
  }
 
  public  openSocialPopup(social: any){
    window.open(social.link, "MsgWindow", "width=600,height=600")
  }
  public pageUrl = window.location.href;
  public socialShare(title: string) {
    var socialIcons = [
      {
        title: "facebook",
        iconClass: "fab fa-facebook-f",
        link: "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(this.pageUrl) + ""
      },
      {
        title: "twitter",
        iconClass: "fab fa-twitter",
        link: "http://twitter.com/intent/tweet?text=" + encodeURIComponent(title) + "&" + encodeURIComponent(this.pageUrl) + ""
      },
      {
        title: "linkedin",
        iconClass: "fab fa-linkedin-in",
        link: "https://www.linkedin.com/shareArticle?mini=true&url=" + encodeURIComponent(this.pageUrl) + "&title=" + encodeURIComponent(title) + ""
      },
      {
        title: "pinterest",
        iconClass: "fab fa-pinterest-p",
        link: "http://pinterest.com/pin/create/button/?url=" + encodeURIComponent(this.pageUrl) + ""
      }
    ];
    return socialIcons;
  } 

}
