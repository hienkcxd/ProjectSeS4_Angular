import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreMainComponent } from './store-main/store-main.component';
import { StoreListCreateComponent } from './store-list-create/store-list-create.component';
import { StoreListDetailComponent } from './store-list-detail/store-list-detail.component';
import { StoreListDeleteComponent } from './store-list-delete/store-list-delete.component';
import { StoreListEditComponent } from './store-list-edit/store-list-edit.component';
import {DataTablesModule} from "angular-datatables";
import {RouterLinkWithHref} from "@angular/router";
import {AppRoutingModule} from "../../../app-routing.module";
import {FormsModule} from "@angular/forms";




@NgModule({
  declarations: [
    StoreMainComponent,
    StoreListCreateComponent,
    StoreListDetailComponent,
    StoreListDeleteComponent,
    StoreListEditComponent,

  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    RouterLinkWithHref,
    DataTablesModule,
    FormsModule,
  ]
})
export class StoreListModule { }
