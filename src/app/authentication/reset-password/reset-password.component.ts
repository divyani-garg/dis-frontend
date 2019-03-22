import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  newPasswd: string;

  constructor(private authService: AuthService ) { }

  ngOnInit() {
  }

  reset() {
    console.log(this.newPasswd);
    this.authService.resetPassword(this.newPasswd).subscribe(
      response => {
        console.log(response);
      }
    );
  }
}
