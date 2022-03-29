import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { FishService } from './fish.service';

@Injectable({
  providedIn: 'root'
})
export class ConfigSetGuard implements CanActivate {

  constructor(private service : FishService,
              private router : Router ){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (!environment.production) return true;

    if(this.service.tank.width!=0)
      return true;
    else {
      this.router.navigate(['dimentions']);
      return false;
    }
      
    
  }
  
}
