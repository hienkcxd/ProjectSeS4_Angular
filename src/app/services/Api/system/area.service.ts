import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {AuthService} from "../../auth.service";
import {Area} from "../../../model/system/area.model";

@Injectable({
  providedIn: 'root'
})
export class AreaService {

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

  getArea():Observable<any>{
    return this.http.get(`${this.baseUrl()}/area`,{headers: this.httpOptions.headers});
  }

  getDetailArea(id:string):Observable<any>{
    return this.http.get(`${this.baseUrl()}/area/${id}`,{headers: this.httpOptions.headers});
  }

  addArea(area:Area):Observable<any>{
    const transferObject = {
      areaName: area.areaName,
      username: area.username
    }
    const object = JSON.stringify(transferObject);
    console.log("json send api"+object)
    return this.http.post(`${this.baseUrl()}/area`,object,{headers: this.httpOptions.headers});
  }

  updateArea(area:Area):Observable<any>{
    const transferObject = {
      id: area.id,
      areaName: area.areaName,
      username: area.username
    }
    const object = JSON.stringify(transferObject);
    console.log("json send api"+object)
    return this.http.put(`${this.baseUrl()}/area`,object,{headers: this.httpOptions.headers});
  }

  deleteArea(areaId:string):Observable<any>{
    return this.http.delete(`${this.baseUrl()}/area/${areaId}`,{headers: this.httpOptions.headers})
  }
}
