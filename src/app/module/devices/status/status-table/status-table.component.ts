import {Component, OnDestroy, OnInit} from '@angular/core';
import {DeviceService} from "../../../../services/Api/device/device.service";
import {Subject} from "rxjs";
import {Device} from "../../../../model/device/device.model";
import {Router} from "@angular/router";
import {DeviceDTO} from "../../../../model/device/device-dto.model";

@Component({
  selector: 'app-status-table',
  templateUrl: './status-table.component.html',
  styleUrls: ['./status-table.component.scss']
})
export class StatusTableComponent implements OnInit,OnDestroy {

  constructor(private deviceService:DeviceService, private route:Router) { }
  dtTrigger: Subject<any> = new Subject<any>();
  deviceList !:DeviceDTO[];
  dtOptions: any = {};

  fetchDevice(){
    this.deviceService.getAllDevice().subscribe(data=>{
      this.deviceList=data;
      this.dtTrigger.next(false)
    })
  }

  ngOnInit(): void {
    this.fetchDevice();
    this.dtOptions = {
      pagingType: 'full_numbers',
      dom: 'Blfrtip',
      buttons: [
        'excel'
      ],
      retrieve: true,
      pageLength: 7,
      lengthMenu: [1,2,3,4,5,6,7],
    }
  }
  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  deleteDevice(deviceId: string) {
    if(confirm("ban co chac muon xoa store ID - "+deviceId)){
      let currentURL = this.route.url;
      this.deviceService.deleteDevice(deviceId).subscribe(data=>{
        alert("xóa thành công store Id - "+deviceId)
        this.fetchDevice();
        this.route.navigate([currentURL])
      },error=>{
        alert("không có quyền xóa!!!")
      });
    }else{
    }
  }
}
