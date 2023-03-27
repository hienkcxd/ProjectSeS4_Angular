import { Component, OnInit } from '@angular/core';
import {StoreService} from "../../../../services/Api/system/store.service";
import {ActivatedRoute} from "@angular/router";
import {Store} from "../../../../model/system/store.model";
import {data} from "jquery";

@Component({
  selector: 'app-store-list-detail',
  templateUrl: './store-list-detail.component.html',
  styleUrls: ['./store-list-detail.component.scss']
})
export class StoreListDetailComponent implements OnInit {

  constructor(private storeService:StoreService, private activatedRoute:ActivatedRoute) { }
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
}
