import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subject} from "rxjs";
import {DeviceGroup} from "../../../../model/device/device-group.model";
import {DeviceGroupService} from "../../../../services/Api/device/device-group.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-group-device-table',
  templateUrl: './group-device-table.component.html',
  styleUrls: ['./group-device-table.component.scss']
})
export class GroupDeviceTableComponent implements OnInit,OnDestroy {

  constructor(private deviceGroupService:DeviceGroupService, private route:Router) { }
  dtTrigger: Subject<any> = new Subject<any>();
  deviceGroupList !:DeviceGroup[];
  dtOptions: any = {};

  fetchDeviceGroup(){
    this.deviceGroupService.getAllDeviceGroup().subscribe(data=>{
      this.deviceGroupList=data;
      this.dtTrigger.next(false)
    })
  }
  ngOnInit(): void {
    this.fetchDeviceGroup();
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

  deleteGroup(groupId: string) {
    if(confirm("ban co chac muon xoa store ID - "+groupId)){
      let currentURL = this.route.url;
      this.deviceGroupService.deleteGroup(groupId).subscribe(data=>{
        alert("xóa thành công store Id - "+groupId)
        this.fetchDeviceGroup();
        this.route.navigate([currentURL]).then(()=>{
          window.location.reload();
        })
      },error=>{
        alert("không có quyền xóa!!!")
      });
    }else{
    }
  }
}
