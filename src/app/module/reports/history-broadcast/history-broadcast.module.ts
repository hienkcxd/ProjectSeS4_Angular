import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BroadcastTableFormComponent } from './broadcast-table-form/broadcast-table-form.component';
import { BroadcastCreateFormComponent } from './broadcast-create-form/broadcast-create-form.component';
import { BroadcastDetailFormComponent } from './broadcast-detail-form/broadcast-detail-form.component';
import { BroadcastUpdateFormComponent } from './broadcast-update-form/broadcast-update-form.component';
import { BroadcastDeleteFormComponent } from './broadcast-delete-form/broadcast-delete-form.component';
import {RouterLinkWithHref} from "@angular/router";
import {DataTablesModule} from "angular-datatables";





@NgModule({
  declarations: [


    BroadcastTableFormComponent,
         BroadcastCreateFormComponent,
         BroadcastDetailFormComponent,
         BroadcastUpdateFormComponent,
         BroadcastDeleteFormComponent
  ],
  imports: [
    CommonModule,
    RouterLinkWithHref,
    DataTablesModule,
  ]
})
export class HistoryBroadcastModule { }
