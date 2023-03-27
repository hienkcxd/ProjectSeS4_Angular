import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OperatorHistoryMainComponent } from './operator-history-main/operator-history-main.component';
import { OperatorHistoryTableComponent } from './operator-history-table/operator-history-table.component';
import {BrowserModule} from "@angular/platform-browser";
import {DataTablesModule} from "angular-datatables";
import {RouterLinkWithHref} from "@angular/router";
import { OperatorHistoryDetailComponent } from './operator-history-detail/operator-history-detail.component';



@NgModule({
  declarations: [
    OperatorHistoryMainComponent,
    OperatorHistoryTableComponent,
    OperatorHistoryDetailComponent
  ],
  imports: [
    BrowserModule,
    DataTablesModule,
    RouterLinkWithHref
  ]
})
export class OperatorHistoryModule { }
