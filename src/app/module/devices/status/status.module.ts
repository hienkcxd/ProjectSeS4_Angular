import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatusMainComponent } from './status-main/status-main.component';
import { StatusTableComponent } from './status-table/status-table.component';
import {BrowserModule} from "@angular/platform-browser";
import {DataTablesModule} from "angular-datatables";
import {RouterLinkWithHref} from "@angular/router";
import { StatusDetailComponent } from './status-detail/status-detail.component';
import { StatusUpdateComponent } from './status-update/status-update.component';
import { StatusDeleteComponent } from './status-delete/status-delete.component';
import {FormsModule} from "@angular/forms";



@NgModule({
    declarations: [
        StatusMainComponent,
        StatusTableComponent,
        StatusDetailComponent,
        StatusUpdateComponent,
        StatusDeleteComponent
    ],
    exports: [
        StatusTableComponent
    ],
    imports: [
        BrowserModule,
        DataTablesModule,
        RouterLinkWithHref,
        FormsModule
    ]
})
export class StatusModule { }
