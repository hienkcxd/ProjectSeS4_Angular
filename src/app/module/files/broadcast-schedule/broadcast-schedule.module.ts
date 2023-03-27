import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScheduleTableFormComponent } from './schedule-table-form/schedule-table-form.component';
import { ScheduleDeleteFormComponent } from './schedule-delete-form/schedule-delete-form.component';
import { ScheduleDetailFormComponent } from './schedule-detail-form/schedule-detail-form.component';
import { ScheduleUpdateFormComponent } from './schedule-update-form/schedule-update-form.component';
import {RouterLinkWithHref} from "@angular/router";
import {DataTablesModule} from "angular-datatables";
import { ScheduleCreateFormComponent } from './schedule-create-form/schedule-create-form.component';




@NgModule({
  declarations: [


    ScheduleTableFormComponent,
         ScheduleDeleteFormComponent,
         ScheduleDetailFormComponent,
         ScheduleUpdateFormComponent,
         ScheduleCreateFormComponent
  ],
  imports: [
    CommonModule,
    RouterLinkWithHref,
    DataTablesModule,
  ]
})
export class BroadcastScheduleModule { }
