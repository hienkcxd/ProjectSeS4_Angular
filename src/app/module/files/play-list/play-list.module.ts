import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLinkWithHref} from "@angular/router";
import {DataTablesModule} from "angular-datatables";
import { PlaylistUpdateFormComponent } from './playlist-update-form/playlist-update-form.component';
import { PlaylistTableFormComponent } from './playlist-table-form/playlist-table-form.component';
import { PlaylistCreateFormComponent } from './playlist-create-form/playlist-create-form.component';
import { PlaylistDetailFormComponent } from './playlist-detail-form/playlist-detail-form.component';
import { PlaylistDeleteFormComponent } from './playlist-delete-form/playlist-delete-form.component';



@NgModule({
  declarations: [
    PlaylistUpdateFormComponent,
    PlaylistTableFormComponent,
    PlaylistCreateFormComponent,
    PlaylistDetailFormComponent,
    PlaylistDeleteFormComponent
  ],
  imports: [
    CommonModule,
    RouterLinkWithHref,
    DataTablesModule,
  ]
})
export class PlayListModule { }
