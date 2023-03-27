import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {VideosModule} from "./videos/videos.module";
import {PlayListModule} from "./play-list/play-list.module";
import {BroadcastScheduleModule} from "./broadcast-schedule/broadcast-schedule.module";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    VideosModule,
    PlayListModule,
    BroadcastScheduleModule,
  ]
})
export class FilesModule { }
