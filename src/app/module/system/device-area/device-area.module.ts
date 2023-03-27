import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeviceMainComponent } from './device-main/device-main.component';
import {RouterLinkWithHref} from "@angular/router";
import { DeviceCreateFormComponent } from './device-create-form/device-create-form.component';
import { DeviceEditFormComponent } from './device-edit-form/device-edit-form.component';
import { DeviceDetailFormComponent } from './device-detail-form/device-detail-form.component';
import { DeviceDeleteFormComponent } from './device-delete-form/device-delete-form.component';
import {DataTablesModule} from "angular-datatables";
import {FormsModule} from "@angular/forms";





@NgModule({
  declarations: [
    DeviceMainComponent,
    DeviceCreateFormComponent,
    DeviceEditFormComponent,
    DeviceDetailFormComponent,
    DeviceDeleteFormComponent,
  ],
  imports: [
    CommonModule,
    RouterLinkWithHref,
    DataTablesModule,
    FormsModule
  ]
})
export class DeviceAreaModule { }
