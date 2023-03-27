import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {AuthService} from "../../auth.service";
import {FileStorage} from "../../../model/file/file-storage.model";

@Injectable({
  providedIn: 'root'
})
export class FileStorageService {

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

  getAllFile():Observable<any>{
    return this.http.get(`${this.baseUrl()}/file-storage`,{headers: this.httpOptions.headers});
  }

  updateFile(file:FileStorage):Observable<any>{
    const transferObject = {
      id: file.id,
      fileName: file.fileName,
      urlGoogleDrive: file.urlGoogleDrive,
    }
    const object = JSON.stringify(transferObject);
    console.log("json send api"+object)

    return this.http.put(`${this.baseUrl()}/file-storage`,object,{headers: this.httpOptions.headers});
  }
  detailFile(id:string):Observable<any>{
    return this.http.get(`${this.baseUrl()}/file-storage/fileId=${id}`,{headers: this.httpOptions.headers});
  }

  addFile(file:FileStorage):Observable<any>{
    const transferObject = {
      id: null,
      fileName: file.fileName,
      urlGoogleDrive: file.urlGoogleDrive,
    }
    const object = JSON.stringify(transferObject);
    console.log("json send api"+object)

    return this.http.post(`${this.baseUrl()}/file-storage`,object,{headers: this.httpOptions.headers});
  }

  deleteStore(fileId:string):Observable<any>{
    return this.http.delete(`${this.baseUrl()}/file-storage/fileId=${fileId}`,{headers: this.httpOptions.headers});
  }
}
