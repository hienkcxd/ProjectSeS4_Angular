import {Component, OnDestroy, OnInit} from '@angular/core';
import {FileStorageService} from "../../../../services/Api/file/file-storage.service";
import {FileStorage} from "../../../../model/file/file-storage.model";
import {Subject} from "rxjs";
import {Router} from "@angular/router";
import {Database, ref, set} from "@angular/fire/database";

@Component({
  selector: 'app-videos-table-form',
  templateUrl: './videos-table-form.component.html',
  styleUrls: ['./videos-table-form.component.scss']
})
export class VideosTableFormComponent implements OnInit,OnDestroy {

  constructor(private fileStorageService:FileStorageService, private route:Router, public database:Database) { }
  dtTrigger: Subject<any> = new Subject<any>();
  listFile!: FileStorage[];
  dtOptions: any = {};
  fetchFileList(){
    this.fileStorageService.getAllFile().subscribe(data=>{
      this.listFile = data;
      this.dtTrigger.next(false);
    })
  }
  fetchFileListFirebase(){
    set(ref(this.database, 'videos/' ), {
      title: "name",
      user: "email",
      videouri : ""
    });
  }
  ngOnInit(): void {
    this.fetchFileList();
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

  deleteFile(fileID:string) {
    if(confirm("ban co chac muon xoa store ID - "+fileID)){
      let currentURL = this.route.url;
      this.fileStorageService.deleteStore(fileID).subscribe(data=>{
        alert("xóa thành công store Id - "+fileID)
        this.fetchFileList();
        this.route.navigate([currentURL])
      },error=>{
        alert("không có quyền xóa!!!")
      });
    }else{
    }
  }
}
