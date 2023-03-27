import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Store} from "../../../model/system/store.model";
import {AuthService} from "../../auth.service";

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(private http:HttpClient, private auth:AuthService) {

  }
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

  getUserStore():Observable<any>{
      return this.http.get(`${this.baseUrl()}/store`,{headers: this.httpOptions.headers});
  }
  getDetailStore(storeId:string):Observable<any>{
    return this.http.get(`${this.baseUrl()}/store/storeid=${storeId}`,{headers: this.httpOptions.headers});
  }

  updateStore(store:Store):Observable<any>{
    const transferObject = {
      id: store.id,
      storeName: store.storeName,
    }
    const object = JSON.stringify(transferObject);
    console.log("json send api"+object)
    return this.http.put(`${this.baseUrl()}/store`,object,{headers: this.httpOptions.headers});
  }

  addStore(store:Store):Observable<any>{
    const transferObject = {
      id: null,
      storeName: store.storeName,
      username: store.username
    }
    const object = JSON.stringify(transferObject);
    console.log("json send api"+object)
    return this.http.post(`${this.baseUrl()}/store`,object,{headers: this.httpOptions.headers});
  }

  deleteStore(storeId:string):Observable<any>{
    return this.http.delete(`${this.baseUrl()}/store/deleteId=${storeId}`,{headers: this.httpOptions.headers});
  }
}
