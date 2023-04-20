import { Component, OnInit } from '@angular/core';
import {StoreService} from "../../../../services/Api/system/store.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Store} from "../../../../model/system/store.model";
import {DeviceInGroupService} from "../../../../services/Api/device/device-in-group.service";
import {DeviceInGroup} from "../../../../model/device/device-in-group.=model";

@Component({
  selector: 'app-content-selector-update',
  templateUrl: './content-selector-update.component.html',
  styleUrls: ['./content-selector-update.component.scss']
})
export class ContentSelectorUpdateComponent implements OnInit {

  constructor(private deviceInGroupService:DeviceInGroupService, private activatedRoute:ActivatedRoute, private route:Router) { }
  Id!:string;
  fileNameString!:string
  detail!:DeviceInGroup;
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data=>{
      this.Id=data['id'];
    })
    console.log(this.Id)
    this.fetchDetail(this.Id)
  }

  fetchDetail(idFetch:string){
    this.deviceInGroupService.getDetailDeviceInGroup(idFetch).subscribe(data=>{
        this.detail=data;
      }
    )
  }

  updateContent(){
    this.detail.fileName = this.fileNameString.split(",")
    console.log(this.detail)
    this.deviceInGroupService.updateDeviceInGroup(this.detail).subscribe(data=>{
      alert("thay đổi thành công")
      if(localStorage.getItem('role')=='ROLE_USER'){
        this.route.navigate(['/user/devices/content-selector'])
      }else {
        this.route.navigate(['/admin/devices/content-selector'])
      }
    },error => {
      alert("thay doi that bai")
    })
  }

}
