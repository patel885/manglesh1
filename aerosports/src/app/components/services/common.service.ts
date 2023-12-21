import { HttpClient } from '@angular/common/http';
import { Injectable, Type } from '@angular/core';
import * as  XLSX from 'xlsx';
import { tap } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import { animate, animateChild, group, query, style, transition, trigger } from '@angular/animations';

@Injectable({
  providedIn: 'root'
})

export class CommonService {
  
  public isPromoPopupDisplayed: boolean=false;
  public aerosports: any[]  = [];
  public jsonData: any[]=[];
  public allPages:any[]=[];
  public currentPage!:any;
  
  public BirthDayPackages:any[]=[];
  public config:any[]=[]; 
  public locations:any[] = [];
  public aerosprots$: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  public blogs:any[] = [];
  
  constructor(private httpClient: HttpClient){
      
  }



   load(){
   console.log("load common service");
    return this.httpClient.get('assets/data/menu.xlsx', { responseType: 'blob' }).pipe( tap(data =>{
      const reader: FileReader = new FileReader();
      reader.onload = (e: any) => {
        var url = window.location.href;
        var urlItems = url.split('?')[0].split('/');
        if(urlItems.length >= 4){
          this.location = urlItems[3];

        const bstr: string = e.target.result;
        const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });
        const ws1: XLSX.WorkSheet = wb.Sheets["Data"]; 
       this.jsonData = XLSX.utils.sheet_to_json(ws1, {defval:""});        
       this.aerosports = this.jsonData.sort((i: any , j: any) => i.parentid - j.parentid).filter(m=>{
                //m.section1= m.section1.replace(/\r?\n|\r/g, "<br/>");    
                  return ((m.location.toUpperCase().indexOf(this.location.toUpperCase())>-1 || m.location=='') );
        });    
      /*****************getting current page*********************** */
      var path=url.split('/').pop();
       if(urlItems.length==4)
       {
          path="home";
       }
        this.currentPage = this.aerosports.filter(m=>{
               return m.path.toUpperCase()== path?.toUpperCase();  
        })[0];
        /*****************end getting current page*********************** */
        this.locations = XLSX.utils.sheet_to_json(wb.Sheets["locations"], {defval:""}) ;
/*        console.log(this.locations);
        console.log(this.location);
        var sitemap='<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';
        this.locations.forEach(t=>{
          this.jsonData.forEach(data=>{
            if(data.location.toUpperCase().indexOf(t.locations.toUpperCase())>-1 ||data.location=='')
              sitemap=sitemap+'<url><loc>https://www.aerosportsparks.ca/'+t.locations+'/'+data.parentid+'/'+data.path  +'</loc></url>';
          })

        });
        sitemap=sitemap+'</urlset>';

        console.log("sitemap");
        console.log(sitemap);*/
        this.allPages=this.aerosports;
        this.BirthDayPackages = XLSX.utils.sheet_to_json(wb.Sheets["birthday packages"], {defval:""}) ;
        this.BirthDayPackages = this.BirthDayPackages.filter(m=>{         
          return (m.location.toUpperCase().indexOf(this.location.toUpperCase())>-1 || m.location=='');
        });           
        
        this.blogs = XLSX.utils.sheet_to_json(wb.Sheets["blogs"], {defval:""}) ;
        this.blogs = this.blogs.filter(m=>{         
          return (m.location.toUpperCase().indexOf(this.location.toUpperCase())>-1 || m.location=='');
        });           
        console.log(this.blogs);

        this.config=XLSX.utils.sheet_to_json(wb.Sheets["config"], {defval:""});        
        this.config=this.config.filter(m=>{      
          m.value= m.value.replace(/\r?\n|\r/g, "<br/>");    
          return (m.location.toUpperCase().indexOf(this.location.toUpperCase())>-1 || m.location=='');
        });    
        console.log('configtt');
        console.log(this.location);
        console.log(this.config);
        let result: any[] = [];
        this.aerosports.reduce((acc: any, place: any) =>{
        let plc = Object.assign(place, {"children": []});
         if(place.parentid){
           if(acc[place.parentid])
            acc[place.parentid].children.push(plc);
          }else{
            result.push(plc);
          }
          acc[place.pageid] = plc;

          return acc;
        },[]);

        this.aerosports = result;
       

//          var pagetype = urlItems[4];
        if(this.location!='')
        {
          this.locations = this.locations.filter(s => {
            return s.locations === this.location;
          });
        }


        /* if(actualLocation !== undefined && actualLocation.length > 0){
           this.location = tempLocation;
           //this.router.navigate([window.location.pathname]);
         }*/
        }

        this.aerosprots$.next(this.aerosports);
       
        

      };
      reader.readAsBinaryString(data);
 
      
    })).toPromise();

  
  }
 
  private _locationCookieName:string = "aero-location";
  set location(value: string){
    localStorage.setItem(this._locationCookieName, value);
  }

  get location(): string {
    var s = localStorage.getItem(this._locationCookieName);
    return s === null ? '' : s;
  }

  getconfig(key:string): string {
    //console.log(s);
    //console.log(this.commonService.config);
    var s: any[];
        s = this.config.filter(t=>{
          return t.key==key;
        }) ;
       // console.log(s);
    if(s.length>0)
       return s[0].value;
       else 
       return '';    
        
      }

  
}
export const slideInAnimation =
  trigger('routeAnimations', [
    transition('* <=> *', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ]),
      query(':enter', [
        style({ left: '-100%' })
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('300ms ease-out', style({ left: '100%' }))
        ]),
        query(':enter', [
          animate('300ms ease-out', style({ left: '0%' }))
        ]),
      ]),
    ]),
    transition('* <=> *', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ]),
      query(':enter', [
        style({ left: '-100%' })
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('200ms ease-out', style({ left: '100%', opacity: 0 }))
        ]),
        query(':enter', [
          animate('300ms ease-out', style({ left: '0%' }))
        ]),
        query('@*', animateChild())
      ]),
    ])
  ]);  


