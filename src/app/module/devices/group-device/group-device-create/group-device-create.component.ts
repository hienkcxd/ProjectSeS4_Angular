import { Component, OnInit } from '@angular/core';
import {DeviceGroupService} from "../../../../services/Api/device/device-group.service";
import {Router} from "@angular/router";
import {DeviceGroup} from "../../../../model/device/device-group.model";

@Component({
  selector: 'app-group-device-create',
  templateUrl: './group-device-create.component.html',
  styleUrls: ['./group-device-create.component.scss']
})
export class GroupDeviceCreateComponent implements OnInit {

  constructor(private deviceGroupService:DeviceGroupService, private route:Router) { }
  group:DeviceGroup = new class implements DeviceGroup {
    groupName!: string;
    id!: string;
    username!: string;
  };
  ngOnInit(): void {
  }

  addGroup() {
    let curUrl = this.route.url;
    this.deviceGroupService.addGroup(this.group).subscribe(data=>{
      alert("thêm mới thành công")
      if(localStorage.getItem('role')=='ROLE_USER'){
        this.route.navigate(['/user/devices/group-device'])
      }else {
        this.route.navigate(['/admin/devices/group-device'])
      }
    },error=>{
      alert("thêm thất bại")
    })
  }
}
