import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {FileStorage} from "../../../../model/file/file-storage.model";
import {FileStorageService} from "../../../../services/Api/file/file-storage.service";
import {data} from "jquery";

@Component({
  selector: 'app-videos-create-form',
  templateUrl: './videos-create-form.component.html',
  styleUrls: ['./videos-create-form.component.scss']
})
export class VideosCreateFormComponent implements OnInit {

  constructor(private fileStorageService:FileStorageService, private route:Router) { }
  file:FileStorage = new class implements FileStorage {
    createDate!: string;
    fileName!: string;
    fileType!: string;
    id!: string;
    urlGoogleDrive!: string;
    username!: string;
  }
  ngOnInit(): void {
  }

  addFile() {
    let currentURL = this.route.url;
    this.fileStorageService.addFile(this.file).subscribe(data=>{
      alert("thêm mới thành công")
      if(localStorage.getItem('role')=='ROLE_USER'){
        this.route.navigate(['/user/files/videos'])
      }else {
        this.route.navigate(['/admin/files/videos'])
      }
    },error=>{
      alert("thêm thất bại")
    })
  }
}
