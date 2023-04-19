import { Component, OnInit } from '@angular/core';
import {UserDetailService} from "../../../services/Api/system/user-detail.service";
import {Router} from "@angular/router";
import {UserDetail} from "../../../model/system/user-detail.model";
import {User} from "../../../model/user";

@Component({
  selector: 'app-user-sidebar',
  templateUrl: './user-sidebar.component.html',
  styleUrls: ['./user-sidebar.component.scss']
})
export class UserSidebarComponent implements OnInit {

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

}
