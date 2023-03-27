import { Component, OnInit } from '@angular/core';
import {StoreService} from "../../../../services/Api/system/store.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Store} from "../../../../model/system/store.model";

@Component({
  selector: 'app-store-list-delete',
  templateUrl: './store-list-delete.component.html',
  styleUrls: ['./store-list-delete.component.scss']
})
export class StoreListDeleteComponent implements OnInit {

  constructor(private storeService:StoreService, private activatedRoute:ActivatedRoute, private route:Router) { }
  storeDetail:Store = new class implements Store {
    id!: string;
    storeName!: string;
    username!: string;
  };
  ngOnInit(): void {
  }

}
