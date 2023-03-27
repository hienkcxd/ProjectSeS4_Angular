import { Component, OnInit } from '@angular/core';
import {AreaService} from "../../../../services/Api/system/area.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Area} from "../../../../model/system/area.model";
import {data} from "jquery";

@Component({
  selector: 'app-device-edit-form',
  templateUrl: './device-edit-form.component.html',
  styleUrls: ['./device-edit-form.component.scss']
})
export class DeviceEditFormComponent implements OnInit {

  constructor(private areaService:AreaService, private activatedRoute:ActivatedRoute,private route:Router) { }
  area!:Area;
  areaId!:string;
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data=>{
      this.areaId=data['id'];
    })
    this.detailArea(this.areaId);
  }


  detailArea(id:string) {
    this.areaService.getDetailArea(id).subscribe(data=>{
      this.area = data;
    })
  }

  updateArea() {
    this.areaService.updateArea(this.area).subscribe(data=>{
      alert("update thành công area id - "+this.areaId)
      if(localStorage.getItem('role')=='ROLE_USER'){
        this.route.navigate(['/user/system/area-device'])
      }else {
        this.route.navigate(['/admin/system/area-device'])
      }
    },error => {
      alert("update thất bại!!!")
    })
  }
}
