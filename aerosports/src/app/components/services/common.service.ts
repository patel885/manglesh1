import { Injectable } from '@angular/core';
import ldata from '../data/location.json';
import mdata from '../data/aerosports.json';
import { Aerosports } from '../models/aerosports';

@Injectable({
  providedIn: 'root'
})

export class CommonService {
  public locationData = ldata;
  public aerosports = mdata as Aerosports[];
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
