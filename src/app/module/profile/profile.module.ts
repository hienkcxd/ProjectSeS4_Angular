import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileMainComponent } from './profile-main/profile-main.component';
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    ProfileMainComponent
  ],
  exports: [
    ProfileMainComponent
  ],
    imports: [
        CommonModule,
        FormsModule
    ]
})
export class ProfileModule { }
