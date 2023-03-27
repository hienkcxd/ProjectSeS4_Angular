import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {AuthService} from "../../auth.service";
import {DeviceDTO} from "../../../model/device/device-dto.model";

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

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

  getAllDevice():Observable<any>{
      return this.http.get(`${this.baseUrl()}/device`,{headers: this.httpOptions.headers});
  }

  getAllDeviceDTO():Observable<any>{
    return this.http.get(`${this.baseUrl()}/device/DeviceDTO`,{headers: this.httpOptions.headers});
  }

  detailDevice(deviceId:string):Observable<any>{
    return this.http.get(`${this.baseUrl()}/device/dto=${deviceId}`,{headers: this.httpOptions.headers});
  }
  updateDevice(deviceDTO:DeviceDTO):Observable<any>{
    const transferObject = {
      id: deviceDTO.id,
      deviceName:deviceDTO.deviceName,
      deviceID:deviceDTO.deviceID,
      groupName:deviceDTO.groupName,
      username:deviceDTO.username,
      area:deviceDTO.area,
      storeName: deviceDTO.storeName,
    }
    const object = JSON.stringify(transferObject);
    console.log("json send api"+object)
    return this.http.put(`${this.baseUrl()}/device`,object, {headers: this.httpOptions.headers});
  }
  deleteDevice(deviceId:string):Observable<any>{
    return this.http.delete(`${this.baseUrl()}/device/${deviceId}`,{headers: this.httpOptions.headers});
  }

}
