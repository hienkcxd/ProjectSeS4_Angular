import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AuthService} from "../../auth.service";
import {Observable} from "rxjs";
import {DeviceDTO} from "../../../model/device/device-dto.model";
import {DeviceInGroup} from "../../../model/device/device-in-group.=model";

@Injectable({
  providedIn: 'root'
})
export class DeviceInGroupService {

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

  getAllDeviceInGroup():Observable<any>{
    return this.http.get(`${this.baseUrl()}/device-in-group`,{headers: this.httpOptions.headers});
  }

  getDetailDeviceInGroup(id:string):Observable<any>{
    return this.http.get(`${this.baseUrl()}/device-in-group/${id}`,{headers: this.httpOptions.headers});
  }
  updateDeviceInGroup(deviceInGroup:DeviceInGroup):Observable<any>{
    const transferObject = {
      username:deviceInGroup.username,
      groupName:deviceInGroup.groupName,
      deviceName:deviceInGroup.deviceName,
      fileName:deviceInGroup.fileName
    }
    const object = JSON.stringify(transferObject);
    console.log("json send api"+object)
    return this.http.put(`${this.baseUrl()}/device-in-group`,object, {headers: this.httpOptions.headers});
  }
  deleteDeviceInGroup(deviceId:string):Observable<any>{
    return this.http.delete(`${this.baseUrl()}/device-in-group/${deviceId}`,{headers: this.httpOptions.headers});
  }
}
