import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TANK } from './consts';

@Injectable({
  providedIn: 'root'
})
export class TankGuard implements CanActivate {
  constructor(private router : Router ){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    let tank = localStorage.getItem(TANK)

    if(tank != null)
      return true;
    else {
      this.router.navigate(['dimentions']);
      return false;
    }
  }
}  
