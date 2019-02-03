import { Component, OnInit } from '@angular/core';
import { Student } from '../../Model/student.model';
import { StudentService } from '../../API_Service/student.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  student: Student = new Student();
  submitted = false;

  constructor(private studentService: StudentService) { }

  ngOnInit() {
  }

  newStudent(): void {
    this.submitted = false;
    this.student = new Student();
  }

  save() {
    this.studentService.forgotPassword(this.student)
      .subscribe(data => console.log(data), error => console.log(error));
    this.student = new Student();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }
}