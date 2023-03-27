import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ContentSelectorModule} from "./content-selector/content-selector.module";
import {GroupDeviceModule} from "./group-device/group-device.module";
import {StatusModule} from "./status/status.module";
import {OperatorHistoryModule} from "./operator-history/operator-history.module";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ContentSelectorModule,
    GroupDeviceModule,
    StatusModule,
    OperatorHistoryModule
  ]
})
export class DevicesModule { }
