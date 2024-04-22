import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent implements OnInit {
  constructor(public route: Router) { }
  ngOnInit() {

  }
  FistName: any = ""
  lastname: any = ""
  Email: any = ""
  Address: any = ""
  ContactNumbar: any = ""
  Password: any = "";
  Confirmpassword: any = ""
  onClickLogin() {
    console.log("You clicked the login button", this.FistName, this.lastname, this.Email, this.Address, this.ContactNumbar, this.Password, this.Confirmpassword);
    this.route.navigate(['login']);
  }
  onClickSingup() {
    this.route.navigate(['signup']);
  }

}
