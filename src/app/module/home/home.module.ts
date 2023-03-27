import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { TableComponent } from './table/table.component';
import { HomeMainComponent } from './home-main/home-main.component';
import {DataTablesModule} from "angular-datatables";



@NgModule({
  declarations: [
    CardComponent,
    TableComponent,
    HomeMainComponent
  ],
  imports: [
    CommonModule,
    DataTablesModule
  ]
})
export class HomeModule { }
