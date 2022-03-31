import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SPACE_AVALIABLE } from './consts';

@Injectable({
  providedIn: 'root'
})
export class SpaceGuard implements CanActivate {

  constructor(private router : Router ){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    let space = localStorage.getItem(SPACE_AVALIABLE)

    if(space != null)
      return true;
    else {
      this.router.navigate(['dimentions']);
      return false;
    }
      
    
  }
  
}
