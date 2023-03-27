import { Component, OnInit } from '@angular/core';
import {Subject} from "rxjs";
import {DeviceLog} from "../../../../model/device/device-log.model";
import {DeviceNoteService} from "../../../../services/Api/device/device-note.service";
import {DeviceNote} from "../../../../model/device/device-note.model";

@Component({
  selector: 'app-support-table-form',
  templateUrl: './support-table-form.component.html',
  styleUrls: ['./support-table-form.component.scss']
})
export class SupportTableFormComponent implements OnInit {

  constructor(private deviceNoteService:DeviceNoteService) { }
  dtTrigger: Subject<any> = new Subject<any>();
  deviceNoteList !:DeviceNote[];
  dtOptions: any = {};

  fetchDeviceNote(){
    this.deviceNoteService.getAllDeviceNote().subscribe(data=>{
      this.deviceNoteList=data;
      this.dtTrigger.next(false)
    })
  }

  ngOnInit(): void {
    this.fetchDeviceNote();
    this.dtOptions = {
      pagingType: 'full_numbers',
      dom: 'Blfrtip',
      buttons: [
        'excels'
      ],
      pageLength: 7,
      lengthMenu: [1,2,3,4,5,6,7],
    }
  }
  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

}

