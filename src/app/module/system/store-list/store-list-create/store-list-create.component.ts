import { Component, OnInit } from '@angular/core';
import {StoreService} from "../../../../services/Api/system/store.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Store} from "../../../../model/system/store.model";
import {data, error} from "jquery";

@Component({
  selector: 'app-store-list-create',
  templateUrl: './store-list-create.component.html',
  styleUrls: ['./store-list-create.component.scss']
})
export class StoreListCreateComponent implements OnInit {

  constructor(private storeService:StoreService, private route:Router) { }
  storeDetail:Store = new class implements Store {
    id!: string;
    storeName!: string;
    username!: string;
  };
  ngOnInit(): void {
  }

  addStore() {
    let currentURL = this.route.url;
      this.storeService.addStore(this.storeDetail).subscribe(data=>{
        alert("thêm mới thành công")
        if(localStorage.getItem('role')=='ROLE_USER'){
          this.route.navigate(['/user/system/store-list'])
        }else {
          this.route.navigate(['/admin/system/store-list'])
        }
      },error=>{
        alert("thêm thất bại")
        this.route.navigate([currentURL])
      })
  }
}
