import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { GlobalService } from 'src/app/core/service/global.service';
import { LocalStorageDataService } from 'src/app/core/service/local-storage-data.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuardGuard implements CanActivate {
  constructor(public global:GlobalService){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
   let user = this.global.user;
   if(user && user.role == 'admin'){
     return true;
   }
   else{
    return false;
   }
  }
  
}
