import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LayoutMainComponent} from "../../../layout-main/layout-main.component";
import {GroupDeviceMainComponent} from "../../devices/group-device/group-device-main/group-device-main.component";
import {GroupDeviceCreateComponent} from "../../devices/group-device/group-device-create/group-device-create.component";
import {GroupDeviceDetailComponent} from "../../devices/group-device/group-device-detail/group-device-detail.component";
import {GroupDeviceUpdateComponent} from "../../devices/group-device/group-device-update/group-device-update.component";
import {GroupDeviceDeleteComponent} from "../../devices/group-device/group-device-delete/group-device-delete.component";
import {StatusMainComponent} from "../../devices/status/status-main/status-main.component";
import {StatusDetailComponent} from "../../devices/status/status-detail/status-detail.component";
import {StatusUpdateComponent} from "../../devices/status/status-update/status-update.component";
import {StatusDeleteComponent} from "../../devices/status/status-delete/status-delete.component";
import {
  ContentSelectorMainComponent
} from "../../devices/content-selector/content-selector-main/content-selector-main.component";
import {
  ContentSelectorCreateComponent
} from "../../devices/content-selector/content-selector-create/content-selector-create.component";
import {
  ContentSelectorDeleteComponent
} from "../../devices/content-selector/content-selector-delete/content-selector-delete.component";
import {
  ContentSelectorDetailComponent
} from "../../devices/content-selector/content-selector-detail/content-selector-detail.component";
import {
  ContentSelectorUpdateComponent
} from "../../devices/content-selector/content-selector-update/content-selector-update.component";
import {
  OperatorHistoryMainComponent
} from "../../devices/operator-history/operator-history-main/operator-history-main.component";
import {
  OperatorHistoryDetailComponent
} from "../../devices/operator-history/operator-history-detail/operator-history-detail.component";
import {
  OperatorHistoryDeleteComponent
} from "../../devices/operator-history/operator-history-delete/operator-history-delete.component";
import {
  OperatorHistoryUpdateComponent
} from "../../devices/operator-history/operator-history-update/operator-history-update.component";
import {StoreMainComponent} from "../../system/store-list/store-main/store-main.component";
import {StoreListCreateComponent} from "../../system/store-list/store-list-create/store-list-create.component";
import {StoreListDetailComponent} from "../../system/store-list/store-list-detail/store-list-detail.component";
import {StoreListEditComponent} from "../../system/store-list/store-list-edit/store-list-edit.component";
import {StoreListDeleteComponent} from "../../system/store-list/store-list-delete/store-list-delete.component";
import {DeviceMainComponent} from "../../system/device-area/device-main/device-main.component";
import {DeviceCreateFormComponent} from "../../system/device-area/device-create-form/device-create-form.component";
import {DeviceDetailFormComponent} from "../../system/device-area/device-detail-form/device-detail-form.component";
import {DeviceEditFormComponent} from "../../system/device-area/device-edit-form/device-edit-form.component";
import {DeviceDeleteFormComponent} from "../../system/device-area/device-delete-form/device-delete-form.component";
import {
  ScheduleTableFormComponent
} from "../../files/broadcast-schedule/schedule-table-form/schedule-table-form.component";
import {
  ScheduleCreateFormComponent
} from "../../files/broadcast-schedule/schedule-create-form/schedule-create-form.component";
import {
  ScheduleDetailFormComponent
} from "../../files/broadcast-schedule/schedule-detail-form/schedule-detail-form.component";
import {
  ScheduleUpdateFormComponent
} from "../../files/broadcast-schedule/schedule-update-form/schedule-update-form.component";
import {
  ScheduleDeleteFormComponent
} from "../../files/broadcast-schedule/schedule-delete-form/schedule-delete-form.component";
import {PlaylistTableFormComponent} from "../../files/play-list/playlist-table-form/playlist-table-form.component";
import {PlaylistCreateFormComponent} from "../../files/play-list/playlist-create-form/playlist-create-form.component";
import {PlaylistDetailFormComponent} from "../../files/play-list/playlist-detail-form/playlist-detail-form.component";
import {PlaylistUpdateFormComponent} from "../../files/play-list/playlist-update-form/playlist-update-form.component";
import {PlaylistDeleteFormComponent} from "../../files/play-list/playlist-delete-form/playlist-delete-form.component";
import {VideosTableFormComponent} from "../../files/videos/videos-table-form/videos-table-form.component";
import {VideosCreateFormComponent} from "../../files/videos/videos-create-form/videos-create-form.component";
import {VideosDetailFormComponent} from "../../files/videos/videos-detail-form/videos-detail-form.component";
import {VideosUpdateFormComponent} from "../../files/videos/videos-update-form/videos-update-form.component";
import {VideosDeleteFormComponent} from "../../files/videos/videos-delete-form/videos-delete-form.component";

import {
  InsuranceTableFormComponent
} from "../../reports/history-insurance/insurance-table-form/insurance-table-form.component";
import {
  InsuranceCreateFormComponent
} from "../../reports/history-insurance/insurance-create-form/insurance-create-form.component";
import {
  InsuranceDetailFormComponent
} from "../../reports/history-insurance/insurance-detail-form/insurance-detail-form.component";
import {
  InsuranceUpdateFormComponent
} from "../../reports/history-insurance/insurance-update-form/insurance-update-form.component";
import {
  InsuranceDeleteFormComponent
} from "../../reports/history-insurance/insurance-delete-form/insurance-delete-form.component";
import {SupportTableFormComponent} from "../../reports/history-support/support-table-form/support-table-form.component";
import {
  SupportCreateFormComponent
} from "../../reports/history-support/support-create-form/support-create-form.component";
import {
  SupportDetailFormComponent
} from "../../reports/history-support/support-detail-form/support-detail-form.component";
import {
  SupportUpdateFormComponent
} from "../../reports/history-support/support-update-form/support-update-form.component";
import {
  SupportDeleteFormComponent
} from "../../reports/history-support/support-delete-form/support-delete-form.component";
import {HomeMainComponent} from "../../home/home-main/home-main.component";
import {UserLayoutComponent} from "../../../layout-main/user-layout/user-layout.component";
import {ProfileMainComponent} from "../../profile/profile-main/profile-main.component";
import {AuthGuard} from "../../../services/auth.guard";
import {RoleAdminGuard} from "../../../services/role-admin.guard";
import {RoleUserGuard} from "../../../services/role-user.guard";

const routes: Routes = [
  {path:"user",
    component: UserLayoutComponent,
    canActivate: [AuthGuard],
    canActivateChild:[RoleUserGuard],
    children:[
      //-------------------Device--------------------------------//
      {path: "devices", children:[
          {path: "", redirectTo: "group-device", pathMatch: "full"},
          {path: "group-device", children:[
              {path:"", component:GroupDeviceMainComponent},
              {path: "create-device", component: GroupDeviceCreateComponent},
              {path: "detail-device/:id", component: GroupDeviceDetailComponent},
              {path: "update-device/:id", component: GroupDeviceUpdateComponent},
              {path: "delete-device/:id", component: GroupDeviceDeleteComponent},
            ]},
          {path: "devices-system", children:[
              {path:"", component:StatusMainComponent},
              {path: "detail/:id", component: StatusDetailComponent},
              {path: "update/:id", component: StatusUpdateComponent},
              {path: "delete/:id", component: StatusDeleteComponent},
            ]},
          {path: "content-selector", children:[
              {path:"", component:ContentSelectorMainComponent},
              {path: "create-content-selector", component: ContentSelectorCreateComponent},
              {path: "delete-content-selector/:id", component: ContentSelectorDeleteComponent},
              {path: "detail-content-selector/:id", component: ContentSelectorDetailComponent},
              {path: "update-content-selector/:id", component: ContentSelectorUpdateComponent},
            ]},
          {path: "operator-history", children:[
              {path:"", component:OperatorHistoryMainComponent},
              {path: "operator-history-detail", component: OperatorHistoryDetailComponent},
              {path: "operator-history-delete", component: OperatorHistoryDeleteComponent},
              {path: "operator-history-update", component: OperatorHistoryUpdateComponent},
            ]}
        ]},

      //-------------------SYSTEM--------------------------------//
      {path: "system", children:[
          {path: "store-list", children:[
              {path:"", component:StoreMainComponent},
              {path: "create-store", component: StoreListCreateComponent},
              {path: "detail-store/:id", component: StoreListDetailComponent},
              {path: "update-store/:id", component: StoreListEditComponent},
              {path: "delete-store/:id", component: StoreListDeleteComponent},
            ]},
          {path: "area-device", children:[
              {path:"", component:DeviceMainComponent},
              {path: "create-device", component: DeviceCreateFormComponent},
              {path: "detail-device/:id", component: DeviceDetailFormComponent},
              {path: "update-device/:id", component: DeviceEditFormComponent},
              {path: "delete-device/:id", component: DeviceDeleteFormComponent},
            ]},

        ]},

      //-------------------FILES--------------------------------//
      {path: "files", children:[
          {path: "", redirectTo: "broadcast-schedule", pathMatch: "full"},
          {path: "broadcast-schedule", children:[
              {path:"", component: ScheduleTableFormComponent},
              {path: "create-schedule", component: ScheduleCreateFormComponent},
              {path: "detail-schedule/:id", component: ScheduleDetailFormComponent},
              {path: "update-schedule/:id", component: ScheduleUpdateFormComponent},
              {path: "delete-schedule/:id", component: ScheduleDeleteFormComponent},
            ]},
          {path: "play-list", children:[
              {path:"", component:PlaylistTableFormComponent},
              {path: "create-playlist", component: PlaylistCreateFormComponent},
              {path: "detail-playlist/:id", component: PlaylistDetailFormComponent},
              {path: "update-playlist/:id", component: PlaylistUpdateFormComponent},
              {path: "delete-playlist/:id", component: PlaylistDeleteFormComponent},
            ]},
          {path: "videos", children:[
              {path:"", component:VideosTableFormComponent},
              {path: "create-videos", component: VideosCreateFormComponent},
              {path: "detail-videos/:id", component: VideosDetailFormComponent},
              {path: "update-videos/:id", component: VideosUpdateFormComponent},
              {path: "delete-videos/:id", component: VideosDeleteFormComponent},
            ]},
        ]},

      //-------------------REPORT--------------------------------//
      {path: "reports", children:[
          {path: "", redirectTo: "history-broadcast", pathMatch: "full"},
          {path: "history-insurance", children:[
              {path:"", component:InsuranceTableFormComponent},
              {path: "create-insurance", component: InsuranceCreateFormComponent},
              {path: "detail-insurance/:id", component: InsuranceDetailFormComponent},
              {path: "update-insurance/:id", component: InsuranceUpdateFormComponent},
              {path: "delete-insurance/:id", component: InsuranceDeleteFormComponent},
            ]},
          {path: "history-support", children:[
              {path:"", component:SupportTableFormComponent},
              {path: "create-support", component: SupportCreateFormComponent},
              {path: "detail-support/:id", component: SupportDetailFormComponent},
              {path: "update-support/:id", component: SupportUpdateFormComponent},
              {path: "delete-support/:id", component: SupportDeleteFormComponent},
            ]},


        ]},
      {path:"home", component: HomeMainComponent},
      {path:"profile", component: ProfileMainComponent},
      {path:"", component: HomeMainComponent},
    ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
