import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AuthService} from "../../auth.service";
import {Observable} from "rxjs";
import {User} from "../../../model/user";
import {Router} from "@angular/router";
import {data} from "jquery";

@Injectable({
  providedIn: 'root'
})
export class UserDetailService {

  constructor(private http:HttpClient, private auth:AuthService, private router: Router) {

  }
  private baseUrl_ChangePassword = "http://localhost:8080";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization':`${localStorage.getItem('access_token')}`,
    }),
  }
  baseUrl(){
    if(this.auth.isRoleUser()){
      return "http://localhost:8080/api/user";
    }
    else {
      return "http://localhost:8080/api/admin";
    }
  }

  getUserDetail():Observable<any>{
    return this.http.get(`${this.baseUrl()}/user-detail-dto`,{headers: this.httpOptions.headers});
  }

  changePassword(user:User){
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':'application/x-www-form-urlencoded',
        'Authorization':`${localStorage.getItem('access_token')}`,
      }),
    }
    let body = new URLSearchParams();
    body.set('newPassword', user.newPassword.toString());
    alert("new password is: "+user.newPassword)
    return this.http.post(`${this.baseUrl_ChangePassword}/api/change-password`,
      body,
      {headers: httpOptions.headers})
      .subscribe(data=>{
      alert("thay doi mat khau thanh cong, vui long dang nhap lai")
      localStorage.removeItem("access_token");
      localStorage.removeItem("refresh_token");
      localStorage.removeItem("is_logout");
      localStorage.removeItem("role");
      this.router.navigate(["login"])
    },error=>{
      alert("khong duoc de trong")
    });;
  }
}
