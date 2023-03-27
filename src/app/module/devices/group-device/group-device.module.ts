import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupDeviceMainComponent } from './group-device-main/group-device-main.component';
import { GroupDeviceTableComponent } from './group-device-table/group-device-table.component';
import {BrowserModule} from "@angular/platform-browser";
import {DataTablesModule} from "angular-datatables";
import {RouterLinkWithHref} from "@angular/router";
import { GroupDeviceCreateComponent } from './group-device-create/group-device-create.component';
import { GroupDeviceUpdateComponent } from './group-device-update/group-device-update.component';
import { GroupDeviceDeleteComponent } from './group-device-delete/group-device-delete.component';
import { GroupDeviceDetailComponent } from './group-device-detail/group-device-detail.component';
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    GroupDeviceMainComponent,
    GroupDeviceTableComponent,
    GroupDeviceCreateComponent,
    GroupDeviceUpdateComponent,
    GroupDeviceDeleteComponent,
    GroupDeviceDetailComponent
  ],
  imports: [
    BrowserModule,
    DataTablesModule,
    RouterLinkWithHref,
    FormsModule
  ]
})
export class GroupDeviceModule { }
