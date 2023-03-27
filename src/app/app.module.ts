import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './module/layout/header/header.component';
import { FooterComponent } from './module/layout/footer/footer.component';
import { AdminSidebarComponent } from './module/layout/admin-sidebar/admin-sidebar.component';
import { UserSidebarComponent } from './module/layout/user-sidebar/user-sidebar.component';
import {DataTablesModule} from "angular-datatables";
import {HomeModule} from "./module/home/home.module";
import {SystemModule} from "./module/system/system.module";
import {DevicesModule} from "./module/devices/devices.module";
import {ReportsModule} from "./module/reports/reports.module";
import {FilesModule} from "./module/files/files.module";
import {LoginModule} from "./module/login/login.module";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {RouterLinkModule} from "./module/router-link/router-link.module";
import { LayoutMainComponent } from './layout-main/layout-main.component';
import { AdminLayoutComponent } from './layout-main/admin-layout/admin-layout.component';
import { UserLayoutComponent } from './layout-main/user-layout/user-layout.component';
import {ErrorModule} from "./module/error/error.module";
import {ProfileModule} from "./module/profile/profile.module";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AdminSidebarComponent,
    UserSidebarComponent,
    LayoutMainComponent,
    AdminLayoutComponent,
    UserLayoutComponent
  ],
  imports: [
    BrowserModule,
    DataTablesModule,
    HomeModule,
    LoginModule,
    ProfileModule,
    SystemModule,
    ReportsModule,
    FilesModule,
    AppRoutingModule,
    DevicesModule,
    ErrorModule,
    RouterLinkModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
