import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class LogoutGuard implements CanActivate {
  constructor(private auth : AuthService, private router:Router) {
  }
  canActivate(){
    let url = '';
    if(localStorage.getItem('role')=='ROLE_USER'){
      url = '/user/home';
    }else if(localStorage.getItem('role')=='ROLE_ADMIN'){
      url = '/admin/home';
    }
    console.log('loggout router lúc này - '+url)
    if(this.auth.isLogout()){
      return true;
    }else {
      this.router.navigate([url])
      return false;
    }
  }

}
