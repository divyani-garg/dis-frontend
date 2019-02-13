import { Component, OnInit } from '@angular/core';
import { Authentication } from '../../Model/authentication.model';
import { AuthenticationService } from '../../API_Service/authentication.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit
{
  auth: Authentication = new Authentication();
  submitted = false;

  constructor(private authService: AuthenticationService) { }

  ngOnInit() {
  }

  newauth(): void {
    this.submitted = false;
    this.auth = new Authentication();
  }

  save() {
    this.authService.signup(this.auth)
      .subscribe(data => console.log(data), error => console.log(error));
    this.auth = new Authentication();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

}
