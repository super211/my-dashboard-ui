import { Component, OnInit } from '@angular/core';
import { Login, Registration, CheckMobileNumber } from '../../models';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }
  login: Login = new Login();
  projectId: string = "";
  logindata: any[];
  mobNumber: string = "";
  length: number;
  passwd: string = "";
  flag: number = 0;

  error: string = "";
  loading: boolean = false;

  ngOnInit() {
  }

  userLogin(login: Login){
    this.router.navigate(['availability']);
  }
}
