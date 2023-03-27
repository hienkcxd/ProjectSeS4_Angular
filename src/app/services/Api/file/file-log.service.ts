import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AuthService} from "../../auth.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FileLogService {

  constructor(private http:HttpClient, private auth:AuthService) { }
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

  getAllFileLog():Observable<any>{
    return this.http.get(`${this.baseUrl()}/file-log`,{headers: this.httpOptions.headers});
  }
}
