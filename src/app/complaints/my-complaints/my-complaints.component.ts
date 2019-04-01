import { Component, OnInit,Input } from '@angular/core';
import { ComplaintsService } from 'src/app/API_Service/complaints.service';

@Component({
  selector: 'app-my-complaints',
  templateUrl: './my-complaints.component.html',
  styleUrls: ['./my-complaints.component.scss']
})
export class MyComplaintsComponent implements OnInit {
  @Input() cleanlinessMyComplaintsData:any;
  @Input() leMyComplaintsData:any; 
  @Input() otherMyComplaintsData:any;
  @Input() facultyMyComplaintsData:any;
  @Input() stuMyComplaintsData:any;
  cleanlinessMyComplaintsInfo:any[];
  leMyComplaintsInfo:any[];
  otherMyComplaintsInfo:any[];
  facultyMyComplaintsInfo:any[];
  stuMyComplaintsInfo:any[];
  constructor(private complaints:ComplaintsService) { }

  ngOnInit() {

    
    this.cleanlinessMyComplaintsData=this.complaints.getMyCleanlinessComplaint()
  .subscribe(
    data=>{
      this.cleanlinessMyComplaintsInfo=data;
      console.log(this.cleanlinessMyComplaintsInfo);
    }
  )

  this.leMyComplaintsData=this.complaints.getMyLEComplaints()
  .subscribe(
    data=>{
      this.leMyComplaintsInfo=data;
      console.log(this.leMyComplaintsInfo);
    }
  )

  this.otherMyComplaintsData=this.complaints.getMyOtherComplaints()
  .subscribe(
    data=>{
      this.otherMyComplaintsInfo=data;
      console.log(this.otherMyComplaintsInfo);
    }
  )

  this.facultyMyComplaintsData=this.complaints.getMyFacultyComplaints()
  .subscribe(
    data=>{
      this.facultyMyComplaintsInfo=data;
      console.log(this.facultyMyComplaintsInfo);
    }
  )

  this.stuMyComplaintsData=this.complaints.getMyStudentComplaints()
  .subscribe(
    data=>{
      this.stuMyComplaintsInfo=data;
      console.log(this.stuMyComplaintsInfo);
    }
  )

 
  }
}
