import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {DeviceService} from "../../../../services/Api/device/device.service";
import {DeviceDTO} from "../../../../model/device/device-dto.model";
import {data} from "jquery";

@Component({
  selector: 'app-status-detail',
  templateUrl: './status-detail.component.html',
  styleUrls: ['./status-detail.component.scss']
})
export class StatusDetailComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute, private deviceService:DeviceService) { }
  deviceId!:string;
  deviceDTO!:DeviceDTO;
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
  }

}
