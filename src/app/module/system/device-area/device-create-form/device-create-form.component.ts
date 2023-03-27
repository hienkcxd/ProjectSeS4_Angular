import { Component, OnInit } from '@angular/core';
import {AreaService} from "../../../../services/Api/system/area.service";
import {Router} from "@angular/router";
import {Area} from "../../../../model/system/area.model";

@Component({
  selector: 'app-device-create-form',
  templateUrl: './device-create-form.component.html',
  styleUrls: ['./device-create-form.component.scss']
})
export class DeviceCreateFormComponent implements OnInit {

  constructor(private areaService:AreaService, private route:Router) { }
  area:Area = new class implements Area {
    areaName!: string;
    id!: string;
    username!: string;
  }
  ngOnInit(): void {
  }

  addArea() {
    let currentURL = this.route.url;
    this.areaService.addArea(this.area).subscribe(data=>{
      alert("thêm mới thành công")
      if(localStorage.getItem('role')=='ROLE_USER'){
        this.route.navigate(['/user/system/area-device'])
      }else {
        this.route.navigate(['/admin/system/area-device'])
      }
    },error=>{
      alert("thêm thất bại")
      this.route.navigate([currentURL])
    })
  }
}
