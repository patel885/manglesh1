import { HttpClient } from '@angular/common/http';
import { APP_INITIALIZER, Injectable, Provider } from '@angular/core';
import ldata from '../data/location.json';
import * as  XLSX from 'xlsx';
import { inject } from '@angular/core/testing';
import { tap } from 'rxjs/operators';
import { Aerosports, BirthDayPackages, Config } from 'src/app/components/models/aerosports';

@Injectable({
  providedIn: 'root'
})

export class CommonService {
  public locationData = ldata;
  public aerosports: any[]  = [];
public jsonData: any[]=[];
  public allPages:any[]=[];
  public BirthDayPackages:any[]=[];
  public config:any[]=[]; 
  constructor(private httpClient: HttpClient){
      
  }



  load(){

    return this.httpClient.get('assets/data/menu.xlsx', { responseType: 'blob' }).pipe( tap(data =>{
      const reader: FileReader = new FileReader();
      reader.onload = (e: any) => {
        const bstr: string = e.target.result;
        const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });
        const ws1: XLSX.WorkSheet = wb.Sheets["Data"]; 
       this.jsonData = XLSX.utils.sheet_to_json(ws1, {defval:""});        
       this.aerosports = this.jsonData.sort((i: any , j: any) => i.parentid - j.parentid).filter(m=>{
                  return (m.location.indexOf(this.location)>-1 || m.location=='');
        });    
        console.log("fyfft");
        console.log(this.location);
        this.allPages=this.aerosports;
        this.BirthDayPackages = XLSX.utils.sheet_to_json(wb.Sheets["birthday packages"], {defval:""}) ;
        this.BirthDayPackages = this.BirthDayPackages.filter(m=>{         
          return (m.location.indexOf(this.location)>-1 || m.location=='');
        });           
          
        this.config=XLSX.utils.sheet_to_json(wb.Sheets["config"], {defval:""});        
        this.config=this.config.filter(m=>{          
          return (m.location.indexOf(this.location)>-1 || m.location=='');
        });    
        console.log('configtt');
        console.log(this.config);
        let result: any[] = [];
        this.aerosports.reduce((acc: any, place: any) =>{
        let plc = Object.assign(place, {"children": []});
         if(place.parentid){
            acc[place.parentid].children.push(plc);
          }else{
            result.push(plc);
          }
          acc[place.pageid] = plc;

          return acc;
        },[]);

        this.aerosports = result;
       
         
        

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



}


