import { Router } from '@angular/router';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { ToastrManager } from 'ng6-toastr-notifications';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  newPasswd: string;

  constructor(private authService: AuthService, private router: Router, public toastr: ToastrManager) { }

  ngOnInit() {
  }

  reset() {
    this.authService.resetPassword(this.newPasswd).subscribe(
      // httpResponse handling
      response => {
        if(response.ok) {
          this.router.navigate(['/']);
          this.toastr.successToastr(response.body['message'], 'Success!');
          console.log(response);
        }
      },
      // httpErrorResponse handling
      error => {
        if(error.status === 400) {
          this.router.navigate(['/forgot-password']);
          this.toastr.errorToastr(error.error['message'], 'Oops!');
          console.log(error);
        }
      }
    );
  }
}
