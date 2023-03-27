import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Store} from "../../../../model/system/store.model";
import {StoreService} from "../../../../services/Api/system/store.service";
import {Subject} from "rxjs";
import {DataTableDirective} from "angular-datatables";
import {Router} from "@angular/router";
import {data, error} from "jquery";

@Component({
  selector: 'app-store-main',
  templateUrl: './store-main.component.html',
  styleUrls: ['./store-main.component.scss']
})
export class StoreMainComponent implements OnInit, OnDestroy  {
  constructor(private storeService:StoreService, private route:Router) {
  }
  dtOptions: any = {};
  dtTrigger: Subject<any> = new Subject<any>();
  listStore!: Store[];

  fetchStore():void{
    this.storeService.getUserStore()
      .subscribe(data=>{
        this.listStore = data;
        this.dtTrigger.next(false);
      })
  }


  ngOnInit(): void {
    this.fetchStore();
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
    if(confirm("ban co chac muon xoa store ID - "+id)){
      this.storeService.deleteStore(id).subscribe(data=>{
        alert("xóa thành công store Id - "+id)
        this.fetchStore();
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

