import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLinkWithHref} from "@angular/router";
import {DataTablesModule} from "angular-datatables";
import { VideosDeleteFormComponent } from './videos-delete-form/videos-delete-form.component';
import { VideosTableFormComponent } from './videos-table-form/videos-table-form.component';
import { VideosCreateFormComponent } from './videos-create-form/videos-create-form.component';
import { VideosUpdateFormComponent } from './videos-update-form/videos-update-form.component';
import { VideosDetailFormComponent } from './videos-detail-form/videos-detail-form.component';
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    VideosDeleteFormComponent,
    VideosTableFormComponent,
    VideosCreateFormComponent,
    VideosUpdateFormComponent,
    VideosDetailFormComponent
  ],
  imports: [
    CommonModule,
    RouterLinkWithHref,
    DataTablesModule,
    FormsModule
  ]
})
export class VideosModule { }
