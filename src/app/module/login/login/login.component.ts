import { Component, OnInit } from '@angular/core';
import {User} from "../../../model/user";
import {AuthService} from "../../../services/auth.service";
import {data} from "jquery";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user:User = new User();

  constructor(private authService: AuthService, public router: Router) { }

  ngOnInit(): void {
  }

  userLogin(){
    this.authService.loginUser(this.user);
  }

}
