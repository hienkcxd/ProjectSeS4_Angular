import { Component, OnInit } from '@angular/core';
import {DeviceInGroup} from "../../../../model/device/device-in-group.=model";
import {FileStorage} from "../../../../model/file/file-storage.model";
import {FileStorageService} from "../../../../services/Api/file/file-storage.service";
import {Router} from "@angular/router";
import {DeviceInGroupService} from "../../../../services/Api/device/device-in-group.service";

@Component({
  selector: 'app-content-selector-create',
  templateUrl: './content-selector-create.component.html',
  styleUrls: ['./content-selector-create.component.scss']
})
export class ContentSelectorCreateComponent implements OnInit {

  constructor(private deviceInGroupService:DeviceInGroupService, private route:Router) { }
  deviceInGroup:DeviceInGroup = new class implements DeviceInGroup {
    id!:string;
    username!:string;
    groupName!:string;
    fileName!:string[];
    fileNameId!:string[];
    deviceName!:string[];
  }
  ngOnInit(): void {
  }

  addContent() {
    let currentURL = this.route.url;
    this.deviceInGroupService.addContentDeviceInGroup(this.deviceInGroup).subscribe(data=>{
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
