import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {DeviceService} from "../../../../services/Api/device/device.service";
import {DeviceDTO} from "../../../../model/device/device-dto.model";
import {AreaService} from "../../../../services/Api/system/area.service";
import {DeviceGroupService} from "../../../../services/Api/device/device-group.service";
import {data} from "jquery";
import {Area} from "../../../../model/system/area.model";
import {DeviceGroup} from "../../../../model/device/device-group.model";

@Component({
  selector: 'app-status-update',
  templateUrl: './status-update.component.html',
  styleUrls: ['./status-update.component.scss']
})
export class StatusUpdateComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute,
              private route:Router,
              private areaService:AreaService,
              private deviceGroupService:DeviceGroupService,
              private deviceService:DeviceService,
              ) { }
  deviceId!:string;
  deviceDTO!:DeviceDTO;
  areaList!:Area[];
  deviceGroupList!:DeviceGroup[];

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data=>{
      this.deviceId=data['id'];
    })
    this.fetchDetailDevice(this.deviceId)
  }
  fetchDetailDevice(id:string){
    this.deviceService.detailDevice(id).subscribe(data=>{
      this.deviceDTO=data;
    })
    this.fetchArea();
    this.fetchGroup();
  }

  fetchArea(){
    this.areaService.getArea().subscribe(data=>{
      this.areaList = data;
    })
  }
  fetchGroup(){
    this.deviceGroupService.getAllDeviceGroup().subscribe(data=>{
      this.deviceGroupList = data;
    })
  }

  updateDevice() {
    this.deviceService.updateDevice(this.deviceDTO).subscribe(data=>{
      alert("thay đổi thành công")
      if(localStorage.getItem('role')=='ROLE_USER'){
        this.route.navigate(['/user/devices/devices-system'])
      }else {
        this.route.navigate(['/admin/devices/devices-system'])
      }
    },error => {
      alert("thay doi that bai")
    })
  }
}
