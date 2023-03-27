import { Component, OnInit } from '@angular/core';
import {Subject} from "rxjs";
import {PlaylistService} from "../../../../services/Api/file/playlist.service";
import {Playlist} from "../../../../model/file/playlist.model";
import {data} from "jquery";

@Component({
  selector: 'app-playlist-table-form',
  templateUrl: './playlist-table-form.component.html',
  styleUrls: ['./playlist-table-form.component.scss']
})
export class PlaylistTableFormComponent implements OnInit {

  constructor(private playListService:PlaylistService) { }
  dtTrigger: Subject<any> = new Subject<any>();
  dtOptions: any = {};
  listPlayList !: Playlist[];
  fetchPlayList(){
    this.playListService.getAllPlayList().subscribe(data=>{
      this.listPlayList = data;
      this.dtTrigger.next(false);
    })
  }
  ngOnInit(): void {
    this.fetchPlayList();
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

