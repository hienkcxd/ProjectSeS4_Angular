import { Component, OnInit } from '@angular/core';
import {AreaService} from "../../../../services/Api/system/area.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Area} from "../../../../model/system/area.model";
import {data} from "jquery";

@Component({
  selector: 'app-device-detail-form',
  templateUrl: './device-detail-form.component.html',
  styleUrls: ['./device-detail-form.component.scss']
})
export class DeviceDetailFormComponent implements OnInit {

  constructor(private areaService:AreaService, private activatedRoute:ActivatedRoute) { }
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
}
