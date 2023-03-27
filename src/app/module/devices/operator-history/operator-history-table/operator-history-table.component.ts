import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subject} from "rxjs";
import {DeviceLog} from "../../../../model/device/device-log.model";
import {DeviceLogService} from "../../../../services/Api/device/device-log.service";

@Component({
  selector: 'app-operator-history-table',
  templateUrl: './operator-history-table.component.html',
  styleUrls: ['./operator-history-table.component.scss']
})
export class OperatorHistoryTableComponent implements OnInit,OnDestroy {

  constructor(private deviceLogService:DeviceLogService) { }
  dtTrigger: Subject<any> = new Subject<any>();
  deviceLogList !:DeviceLog[];
  dtOptions: any = {};

  fetchDeviceLog(){
    this.deviceLogService.getAllDeviceLog().subscribe(data=>{
      this.deviceLogList=data;
      this.dtTrigger.next(false)
    })
  }

  ngOnInit(): void {
    this.fetchDeviceLog();
    this.dtOptions = {
      pagingType: 'full_numbers',
      dom: 'Blfrtip',
      buttons: [
        'excel'
      ],
      pageLength: 7,
      lengthMenu: [1,2,3,4,5,6,7],
    }
  }
  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

}
