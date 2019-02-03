import { Component, OnInit } from '@angular/core';
import { Authentication } from '../../Model/authentication.model';
import { AuthenticationService } from '../../API_Service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: String;
  authentication: Authentication = new Authentication();
  submitted = false;
  userType = String;
  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit() {
  }

  newStudent(): void{
    this.submitted = false;
    this.authentication = new Authentication();
  }

  login(){
    console.log(this.authentication.username);
    this.authenticationService.login(this.authentication)
    .subscribe(
      data => this.redirect(data), error => console.log(error));
    this.authentication = new Authentication();
  }

  redirect(userType) {
    this.user = userType;
    console.log(this.user);
  }

  onSubmit() {
    this.submitted = true;
    this.login();
  }
}
