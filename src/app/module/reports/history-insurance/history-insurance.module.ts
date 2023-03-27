import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InsuranceDeleteFormComponent } from './insurance-delete-form/insurance-delete-form.component';
import { InsuranceCreateFormComponent } from './insurance-create-form/insurance-create-form.component';
import { InsuranceTableFormComponent } from './insurance-table-form/insurance-table-form.component';
import { InsuranceUpdateFormComponent } from './insurance-update-form/insurance-update-form.component';
import { InsuranceDetailFormComponent } from './insurance-detail-form/insurance-detail-form.component';
import {RouterLinkWithHref} from "@angular/router";
import {DataTablesModule} from "angular-datatables";



@NgModule({
  declarations: [

    InsuranceDeleteFormComponent,
       InsuranceCreateFormComponent,
       InsuranceTableFormComponent,
       InsuranceUpdateFormComponent,
       InsuranceDetailFormComponent
  ],
    imports: [
      CommonModule,
      RouterLinkWithHref,
      DataTablesModule,
    ]
})
export class HistoryInsuranceModule { }
