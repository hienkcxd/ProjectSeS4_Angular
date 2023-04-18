import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subject} from "rxjs";
import {DeviceLog} from "../../../../model/device/device-log.model";
import {DeviceLogService} from "../../../../services/Api/device/device-log.service";
import {freeApiService} from "../../../../services/freeapi.service";
import {Albums} from "../../../../model/testing/albums";
import {data} from "jquery";

@Component({
  selector: 'app-operator-history-table',
  templateUrl: './operator-history-table.component.html',
  styleUrls: ['./operator-history-table.component.scss']
})
export class OperatorHistoryTableComponent implements OnInit,OnDestroy {

  constructor(private deviceLogService:DeviceLogService,private _freeApiService:freeApiService) { }
  dtTrigger: Subject<any> = new Subject<any>();
  deviceLogList !:DeviceLog[];
  dtOptions: any = {};
//tuan them
  lstAlbums:Albums[]|undefined;
  albumSelected:number|undefined;
  fetchDeviceLog(selectedAlbumId:any){
    if(selectedAlbumId==null||selectedAlbumId==""){
    this._freeApiService.getAlbums().subscribe(
      data=>{
        this.lstAlbums=data;
        this.dtTrigger.next(false)
      }
    )}else {
      this._freeApiService.getAlbumsForParams(selectedAlbumId).subscribe(
        data=>{
          this.lstAlbums=data;
          this.dtTrigger.next(false)
        }
      )
    }
  }

  ngOnInit(): void {
    // @ts-ignore
    this.fetchDeviceLog();
    this.dtOptions = {
      pagingType: 'full_numbers',
      dom: 'Blfrtip',
      buttons: [
        'excel'
      ],
      pageLength: 10,
      lengthMenu: [1,2,3,4,5,6,7],
    }
  }
  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

}
