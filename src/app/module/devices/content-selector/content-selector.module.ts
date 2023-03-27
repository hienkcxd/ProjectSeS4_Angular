import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentSelectorMainComponent } from './content-selector-main/content-selector-main.component';
import { ContentSelectorCreateComponent } from './content-selector-create/content-selector-create.component';
import { ContentSelectorTableComponent } from './content-selector-table/content-selector-table.component';
import {BrowserModule} from "@angular/platform-browser";
import {DataTablesModule} from "angular-datatables";
import {RouterLinkWithHref} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {ContentSelectorUpdateComponent} from "./content-selector-update/content-selector-update.component";



@NgModule({
  declarations: [
    ContentSelectorMainComponent,
    ContentSelectorCreateComponent,
    ContentSelectorUpdateComponent,
    ContentSelectorTableComponent
  ],
  imports: [
    BrowserModule,
    DataTablesModule,
    RouterLinkWithHref,
    FormsModule
  ]
})
export class ContentSelectorModule { }
