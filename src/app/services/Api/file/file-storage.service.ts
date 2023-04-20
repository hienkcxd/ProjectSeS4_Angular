import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {AuthService} from "../../auth.service";
import {FileStorage} from "../../../model/file/file-storage.model";
import {AngularFirestore} from "@angular/fire/compat/firestore";


@Injectable({
  providedIn: 'root'
})
export class FileStorageService {

  constructor(private http:HttpClient, private auth:AuthService, private  afs:AngularFirestore) { }
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
  //add file len firebase
  addFileFirebase(file:FileStorage){
    file.id = this.afs.createId();
    return this.afs.collection('/videos').add(file)
  }
  //lay file firebase
  getAllFileFirebase(){
    return this.afs.collection('/videos').snapshotChanges();
  }
  //delete file
  deleteFileFirebase(file:FileStorage){
    return this.afs.doc('/videos'+file.id).delete();
  }
  //update file
  updateFileFirebase(file:FileStorage){
    this.deleteFileFirebase(file)
    this.addFileFirebase(file)
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
