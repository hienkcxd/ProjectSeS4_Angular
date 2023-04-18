import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {HttpClient,HttpParams} from "@angular/common/http";
@Injectable()
export class freeApiService{
  constructor(private httpClient:HttpClient) {

  }
getAlbums():Observable<any>{
    return this.httpClient.get("https://jsonplaceholder.typicode.com/albums")
}
  getAlbumsForParams(selectedAlbumId:string):Observable<any>{
    let param1 = new HttpParams().set('userId',selectedAlbumId);
    return this.httpClient.get("https://jsonplaceholder.typicode.com/albums",{params:param1})
  }
}
