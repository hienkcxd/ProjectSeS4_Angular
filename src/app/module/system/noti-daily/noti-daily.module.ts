import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotiMainComponent } from './noti-main/noti-main.component';
import {RouterLinkWithHref} from "@angular/router";
import { NotiCreateFormComponent } from './noti-create-form/noti-create-form.component';
import { NotiEditFormComponent } from './noti-edit-form/noti-edit-form.component';
import { NotiDeleteFormComponent } from './noti-delete-form/noti-delete-form.component';
import { NotiDetailFormComponent } from './noti-detail-form/noti-detail-form.component';
import {DataTablesModule} from "angular-datatables";



@NgModule({
  declarations: [
    NotiMainComponent,
    NotiCreateFormComponent,
    NotiEditFormComponent,
    NotiDeleteFormComponent,
    NotiDetailFormComponent,

  ],
  imports: [
    CommonModule,
    RouterLinkWithHref,
    DataTablesModule,
  ]
})
export class NotiDailyModule { }
