import { Component, OnInit } from '@angular/core';
import {FileStorageService} from "../../../../services/Api/file/file-storage.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FileStorage} from "../../../../model/file/file-storage.model";
import {data} from "jquery";

@Component({
  selector: 'app-videos-update-form',
  templateUrl: './videos-update-form.component.html',
  styleUrls: ['./videos-update-form.component.scss']
})
export class VideosUpdateFormComponent implements OnInit {

  constructor(private fileStorageService:FileStorageService, private activatedRoute:ActivatedRoute, private route:Router) { }
  file!:FileStorage;
  fileID!:string;
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data=>{
      this.fileID=data['id'];
    });
    this.fetchFileDetail(this.fileID);
  }

  fetchFileDetail(id:string){
    this.fileStorageService.detailFile(id).subscribe(data=>{
        this.file=data;
      }
    )
  }

  updateFile() {
    this.fileStorageService.updateFile(this.file).subscribe(data=>{
      alert("thay đổi thành công!!")
      if(localStorage.getItem('role')=='ROLE_USER'){
        this.route.navigate(['/user/files/videos'])
      }else {
        this.route.navigate(['/admin/files/videos'])
      }
    }, error => {
      alert("thay doi that bai")
    })
  }
}
