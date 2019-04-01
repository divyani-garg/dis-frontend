import { Component, OnInit, Input } from '@angular/core';
import { ComplaintsService } from 'src/app/API_Service/complaints.service';

@Component({
  selector: 'app-total-complaints',
  templateUrl: './total-complaints.component.html',
  styleUrls: ['./total-complaints.component.scss']
})
export class TotalComplaintsComponent implements OnInit {
  @Input() cleanlinessTotalComplaintsData:any;
  @Input() leTotalComplaintsData:any; 
  @Input() cwnTotalComplaintsData:any;
  @Input() eccwTotalComplaintsData:any;
  @Input() otherTotalComplaintsData:any;
  @Input() facultyTotalComplaintsData:any;
  @Input() stuTotalComplaintsData:any;
  @Input() emrsTotalComplaintsData:any;
  @Input() telephoneTotalComplaintsData:any;
  cleanlinessTotalComplaintsInfo:any[];
  leTotalComplaintsInfo:any[];
  cwnTotalComplaintsInfo:any[];
  eccwTotalComplaintsInfo:any[];
  otherTotalComplaintsInfo:any[];
  facultyTotalComplaintsInfo:any[];
  stuTotalComplaintsInfo:any[];
  emrsTotalComplaintsInfo:any[];
  telephoneTotalComplaintsInfo:any[];
  constructor(private complaints:ComplaintsService) { }

  ngOnInit() {

    
    this.cleanlinessTotalComplaintsData=this.complaints.getTotalCleanlinessComplaint()
  .subscribe(
    data=>{
      this.cleanlinessTotalComplaintsInfo=data;
      console.log(this.cleanlinessTotalComplaintsInfo);
    }
  )

  this.leTotalComplaintsData=this.complaints.getTotalLEComplaints()
  .subscribe(
    data=>{
      this.leTotalComplaintsInfo=data;
      console.log(this.leTotalComplaintsInfo);
    }
  )

  this.cwnTotalComplaintsData=this.complaints.getTotalCWNComplaints()
  .subscribe(
    data=>{
      this.cwnTotalComplaintsInfo=data;
      console.log(this.cwnTotalComplaintsInfo);
    }
  )

  this.eccwTotalComplaintsData=this.complaints.getTotalECCWComplaints()
  .subscribe(
    data=>{
      this.eccwTotalComplaintsInfo=data;
      console.log(this.cleanlinessTotalComplaintsInfo);
    }
  )

  this.otherTotalComplaintsData=this.complaints.getTotalOtherComplaints()
  .subscribe(
    data=>{
      this.otherTotalComplaintsInfo=data;
      console.log(this.otherTotalComplaintsInfo);
    }
  )

  this.facultyTotalComplaintsData=this.complaints.getTotalFacultyComplaints()
  .subscribe(
    data=>{
      this.facultyTotalComplaintsInfo=data;
      console.log(this.facultyTotalComplaintsInfo);
    }
  )

  this.stuTotalComplaintsData=this.complaints.getTotalStudentComplaints()
  .subscribe(
    data=>{
      this.stuTotalComplaintsInfo=data;
      console.log(this.stuTotalComplaintsInfo);
    }
  )

  this.emrsTotalComplaintsData=this.complaints.getTotalEMRSComplaints()
  .subscribe(
    data=>{
      this.emrsTotalComplaintsInfo=data;
      console.log(this.emrsTotalComplaintsInfo);
    }
  )

  this.telephoneTotalComplaintsData=this.complaints.getTotalTelephoneComplaints()
  .subscribe(
    data=>{
      this.telephoneTotalComplaintsInfo=data;
      console.log(this.telephoneTotalComplaintsInfo);
    }
  )
  }

}
