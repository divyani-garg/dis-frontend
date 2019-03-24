import { Component, OnInit } from '@angular/core';
import { Student } from '../../Model/student.model';
import { StudentService } from '../../API_Service/student.service';
import { AuthService } from '../auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  forgetForm: FormGroup;
  student: Student = new Student();
  submitted = false;

  constructor(private studentService: StudentService, private authService: AuthService, private formBuider: FormBuilder) { }

  ngOnInit() {
    this.forgetForm = this.formBuider.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  get formCtl() {
    return this.forgetForm.controls;
  }

  forgotPass(email: string) {
    this.authService.forgetPassword(email).subscribe(
      data => {
        console.log(data);
      });
  }

  newStudent(): void {
    this.submitted = false;
    this.student = new Student();
  }


  onSubmit() {
    this.submitted = true;
    if (this.forgetForm.invalid) {
      return;
  }
  console.log(this.student.email);
    this.forgotPass(this.student.email);
  }
}
