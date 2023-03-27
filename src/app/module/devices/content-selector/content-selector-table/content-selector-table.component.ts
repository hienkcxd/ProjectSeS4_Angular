import { Component, OnInit } from '@angular/core';
import {StoreService} from "../../../../services/Api/system/store.service";
import {Router} from "@angular/router";
import {Subject} from "rxjs";
import {DeviceInGroup} from "../../../../model/device/device-in-group.=model";
import {DeviceInGroupService} from "../../../../services/Api/device/device-in-group.service";

@Component({
  selector: 'app-content-selector-table',
  templateUrl: './content-selector-table.component.html',
  styleUrls: ['./content-selector-table.component.scss']
})
export class ContentSelectorTableComponent implements OnInit {

  constructor(private deviceInGroupService:DeviceInGroupService, private route:Router) {
  }
  dtOptions: any = {};
  dtTrigger: Subject<any> = new Subject<any>();
  deviceInGroup!: DeviceInGroup[];

  fetchDeviceInGroup():void{
    this.deviceInGroupService.getAllDeviceInGroup()
      .subscribe(data=>{
        this.deviceInGroup = data;
        this.dtTrigger.next(false);
      })
  }


  ngOnInit(): void {
    this.fetchDeviceInGroup();
    this.dtOptions = {
      pagingType: 'full_numbers',
      dom: 'Blfrtip',
      buttons: [
        'excel'
      ],
      retrieve: true,
      pageLength: 5,
      lengthMenu: [5,7,10],
    }
  }
  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  delete(id:string) {
    let currentURL = this.route.url;
    if(confirm("ban co chac muon xoa nội dung phát của nhóm có Id - "+id)){
      this.deviceInGroupService.deleteDeviceInGroup(id).subscribe(data=>{
        alert("xóa thành công nội dung phát của nhóm có Id - "+id)
        this.fetchDeviceInGroup();
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
