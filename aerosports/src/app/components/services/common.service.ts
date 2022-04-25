import { Injectable } from '@angular/core';
import ldata from '../data/location.json';

@Injectable({
  providedIn: 'root'
})

export class CommonService {
  public locationData = ldata;
  constructor(){

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
