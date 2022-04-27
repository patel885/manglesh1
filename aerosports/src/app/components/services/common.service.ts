import { HttpClient } from '@angular/common/http';
import { APP_INITIALIZER, Injectable, Provider } from '@angular/core';
import ldata from '../data/location.json';
import { Aerosports } from '../models/aerosports';
import * as  XLSX from 'xlsx';
import { inject } from '@angular/core/testing';
import { tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})

export class CommonService {
  public locationData = ldata;
  public aerosports: any[]  = [];
  constructor(private httpClient: HttpClient){
    
  }



  load(){
    
    return this.httpClient.get('assets/data/menu.xlsx', { responseType: 'blob' }).pipe( tap(data =>{
      const reader: FileReader = new FileReader();

      
  
      reader.onload = (e: any) => {
        const bstr: string = e.target.result;
        const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });
  
        /* grab first sheet */
        const wsname1: string = wb.SheetNames[0];
        console.log(wsname1);
        const ws1: XLSX.WorkSheet = wb.Sheets[wsname1]; 
      
  
        /* save data */
        var jsonData = XLSX.utils.sheet_to_json(ws1, {defval:""});        
         

        jsonData = jsonData.sort((i: any , j: any) => i.parentid - j.parentid)
        //console.log(jsonData);
        
        let result: any[] = [];
        

        jsonData.reduce((acc: any, place: any) =>{
          //console.log(p);
          //console.log(c);
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
        console.log(this.aerosports);
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



