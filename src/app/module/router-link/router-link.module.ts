import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AdminRoutingModule} from "./admin/admin-routing.module";
import {UserRoutingModule} from "./user/user-routing.module";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AdminRoutingModule,
    UserRoutingModule
  ]
})
export class RouterLinkModule { }
