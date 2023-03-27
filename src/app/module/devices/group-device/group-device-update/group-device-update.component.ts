import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {DeviceGroupService} from "../../../../services/Api/device/device-group.service";
import {DeviceGroup} from "../../../../model/device/device-group.model";

@Component({
  selector: 'app-group-device-update',
  templateUrl: './group-device-update.component.html',
  styleUrls: ['./group-device-update.component.scss']
})
export class GroupDeviceUpdateComponent implements OnInit {

  constructor(private deviceGroupService:DeviceGroupService,private activatedRoute:ActivatedRoute, private route:Router) { }
  group!:DeviceGroup
  groupId!:string;
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data=>{
      this.groupId=data['id'];
    });
    this.fetchGroupDetail(this.groupId)
  }
  fetchGroupDetail(id:string){
    this.deviceGroupService.getDetailGroup(id).subscribe(data=>{
        this.group=data;
      }
    )
  }
  updGroup() {
    this.deviceGroupService.updateGroup(this.group).subscribe(data=>{
      alert("thay đổi thành công!!")
      if(localStorage.getItem('role')=='ROLE_USER'){
        this.route.navigate(['/user/devices/group-device'])
      }else {
        this.route.navigate(['/admin/devices/group-device'])
      }
    }, error => {
      alert("thay doi that bai")
    })
  }
}
