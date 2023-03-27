import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {AuthService} from "../../auth.service";
import {GroupDeviceModule} from "../../../module/devices/group-device/group-device.module";
import {DeviceGroup} from "../../../model/device/device-group.model";

@Injectable({
  providedIn: 'root'
})
export class DeviceGroupService {

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

  getAllDeviceGroup():Observable<any>{
    return this.http.get(`${this.baseUrl()}/device-group`,{headers: this.httpOptions.headers});
  }

  getDetailGroup(groupId:string):Observable<any>{
    return this.http.get(`${this.baseUrl()}/device-group/${groupId}`,{headers: this.httpOptions.headers});
  }

  addGroup(group:DeviceGroup):Observable<any>{
    const transferObject = {
      groupName: group.groupName,
    }
    const object = JSON.stringify(transferObject);
    console.log("json send api"+object)
    return this.http.post(`${this.baseUrl()}/device-group`,object, {headers: this.httpOptions.headers});
  }

  updateGroup(group:DeviceGroup):Observable<any>{
    const transferObject = {
      id: group.id,
      groupName: group.groupName,
      username: group.username,
    }
    const object = JSON.stringify(transferObject);
    console.log("json send api"+object)
    return this.http.put(`${this.baseUrl()}/device-group`,object,{headers: this.httpOptions.headers});
  }

  deleteGroup(groupId:string):Observable<any>{
    return this.http.delete(`${this.baseUrl()}/device-group/${groupId}`,{headers: this.httpOptions.headers});
  }
}
