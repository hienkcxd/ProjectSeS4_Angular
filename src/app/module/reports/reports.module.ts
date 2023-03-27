import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HistoryBroadcastModule} from "./history-broadcast/history-broadcast.module";
import {HistoryInsuranceModule} from "./history-insurance/history-insurance.module";
import {HistorySupportModule} from "./history-support/history-support.module";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HistoryBroadcastModule,
    HistoryInsuranceModule,
    HistorySupportModule
  ]
})
export class ReportsModule { }
