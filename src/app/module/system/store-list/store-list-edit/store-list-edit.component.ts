import {Component, OnDestroy, OnInit} from '@angular/core';
import {StoreService} from "../../../../services/Api/system/store.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Store} from "../../../../model/system/store.model";
import {data} from "jquery";

@Component({
  selector: 'app-store-list-edit',
  templateUrl: './store-list-edit.component.html',
  styleUrls: ['./store-list-edit.component.scss']
})
export class StoreListEditComponent implements OnInit {

  constructor(private storeService:StoreService, private activatedRoute:ActivatedRoute, private route:Router) { }
  storeId!:string;
  storeDetail!:Store;
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data=>{
      this.storeId=data['id'];
    })
    console.log(this.storeId)
    this.fetchDetailStore(this.storeId)
  }

  fetchDetailStore(id:string){
    this.storeService.getDetailStore(id).subscribe(data=>{
        this.storeDetail=data;
      }
    )
  }

  updateStore(){
    console.log(this.storeDetail)
    this.storeService.updateStore(this.storeDetail).subscribe(data=>{
      alert("thay đổi thành công")
      if(localStorage.getItem('role')=='ROLE_USER'){
        this.route.navigate(['/user/system/store-list'])
      }else {
        this.route.navigate(['/admin/system/store-list'])
      }
    },error => {
      alert("thay doi that bai")
    })
  }
}
