import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SupportCreateFormComponent } from './support-create-form/support-create-form.component';
import { SupportTableFormComponent } from './support-table-form/support-table-form.component';
import { SupportDetailFormComponent } from './support-detail-form/support-detail-form.component';
import { SupportDeleteFormComponent } from './support-delete-form/support-delete-form.component';
import { SupportUpdateFormComponent } from './support-update-form/support-update-form.component';
import {RouterLinkWithHref} from "@angular/router";
import {DataTablesModule} from "angular-datatables";





@NgModule({
  declarations: [

    SupportCreateFormComponent,
       SupportTableFormComponent,
       SupportDetailFormComponent,
       SupportDeleteFormComponent,
       SupportUpdateFormComponent
  ],
  imports: [
    CommonModule,
    RouterLinkWithHref,
    DataTablesModule,

  ]
})
export class HistorySupportModule { }
