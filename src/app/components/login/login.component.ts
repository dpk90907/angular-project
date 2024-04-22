import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(public route: Router){}
  ngOnInit() {
  }
  email:any=""
  password:any=""
onClickLogin(){
  console.log("You clicked the login button", this.email, this.password);
  this.route.navigate(['home'])}
onClickSingup(){
  this.route.navigate(['signup']);
}
}