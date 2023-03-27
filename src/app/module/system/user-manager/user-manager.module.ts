import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserManagerMainComponent } from './user-manager-main/user-manager-main.component';
import { UserTableComponent } from './user-table/user-table.component';
import {DataTablesModule} from "angular-datatables";
import { UserCreateFormComponent } from './user-create-form/user-create-form.component';
import {BrowserModule} from "@angular/platform-browser";
import {HttpClientModule} from "@angular/common/http";
import {RouterLinkWithHref} from "@angular/router";
import { UserEditFormComponent } from './user-edit-form/user-edit-form.component';
import { UserDeleteFormComponent } from './user-delete-form/user-delete-form.component';
import { UserDetailFormComponent } from './user-detail-form/user-detail-form.component';



@NgModule({
  declarations: [
    UserManagerMainComponent,
    UserTableComponent,
    UserCreateFormComponent,
    UserEditFormComponent,
    UserDeleteFormComponent,
    UserDetailFormComponent
  ],
  imports: [
    BrowserModule,
    DataTablesModule,
    RouterLinkWithHref
  ]
})
export class UserManagerModule { }
