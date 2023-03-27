import { Component, OnInit } from '@angular/core';
import {UserDetailService} from "../../../services/Api/system/user-detail.service";
import {UserDetail} from "../../../model/system/user-detail.model";
import {data} from "jquery";
import {User} from "../../../model/user";
import {Router} from "@angular/router";

@Component({
  selector: 'app-profile-main',
  templateUrl: './profile-main.component.html',
  styleUrls: ['./profile-main.component.scss']
})
export class ProfileMainComponent implements OnInit {

  constructor(private userDetailService:UserDetailService, private route:Router) { }
  userDetail!:UserDetail;
  user:User = new User();

  role!:string;
  fetchUserDetail(){
    this.userDetailService.getUserDetail().subscribe(data=>{
      this.userDetail = data;
    })
  }
  ngOnInit(): void {
    this.fetchUserDetail();
    if(localStorage.getItem('role')=='ROLE_USER'){
      this.role='Account User';
    }else {
      this.role='Account Admin';
    }
  }

  changePassword() {
    this.userDetailService.changePassword(this.user)
  }
}
