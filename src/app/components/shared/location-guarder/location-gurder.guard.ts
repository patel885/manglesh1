import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivateChild, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CommonService } from '../../services/common.service';

@Injectable({
  providedIn: 'root'
})
export class LocationGurderGuard implements CanActivate, CanActivateChild {
  constructor(private commonService: CommonService, private router: Router){

  }
  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    console.log("inside child router...");
    console.log(childRoute.params.location);
    //Check the location and the location provided in url, if same allow else redirect to home page
    if(this.commonService.location === childRoute.params?.location){
      return true;
    }else{
      this.router.navigate(['/']);
      return false;
    }
    //return true;
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      console.log('parent router...');
      return true;
  }
  
}
