import { Component, OnInit } from '@angular/core';
import {ScheduleService} from "../../../../services/Api/file/schedule.service";
import {Subject} from "rxjs";
import {Schedule} from "../../../../model/file/schedule.model";
import {data} from "jquery";

@Component({
  selector: 'app-schedule-table-form',
  templateUrl: './schedule-table-form.component.html',
  styleUrls: ['./schedule-table-form.component.scss']
})
export class ScheduleTableFormComponent implements OnInit {

  constructor(private scheduleService:ScheduleService) { }
  dtTrigger: Subject<any> = new Subject<any>();
  scheduleList!:Schedule[];
  dtOptions: any = {};
  fetchSchedule(){
    this,this.scheduleService.getAllSchedule().subscribe(data=>{
      this.scheduleList = data;
      this.dtTrigger.next(false);
    })
  }
  ngOnInit(): void {
    this.fetchSchedule();
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
