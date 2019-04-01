import { Component, OnInit, Input } from '@angular/core';
import { ComplaintsService } from 'src/app/API_Service/complaints.service';
@Component({
  selector: 'app-resolved-complaints',
  templateUrl: './resolved-complaints.component.html',
  styleUrls: ['./resolved-complaints.component.scss']
})
export class ResolvedComplaintsComponent implements OnInit {
  @Input() cleanlinessResolvedComplaintsData:any;
  @Input() leResolvedComplaintsData:any; 
  @Input() cwnResolvedComplaintsData:any;
  @Input() eccwResolvedComplaintsData:any;
  @Input() otherResolvedComplaintsData:any;
  @Input() facultyResolvedComplaintsData:any;
  @Input() stuResolvedComplaintsData:any;
  @Input() emrsResolvedComplaintsData:any;
  @Input() telephoneResolvedComplaintsData:any;
  cleanlinessResolvedComplaintsInfo:any[];
  leResolvedComplaintsInfo:any[];
  cwnResolvedComplaintsInfo:any[];
  eccwResolvedComplaintsInfo:any[];
  otherResolvedComplaintsInfo:any[];
  facultyResolvedComplaintsInfo:any[];
  stuResolvedComplaintsInfo:any[];
  emrsResolvedComplaintsInfo:any[];
  telephoneResolvedComplaintsInfo:any[];
  constructor(private complaints:ComplaintsService) { }

  ngOnInit() {

    this.cleanlinessResolvedComplaintsData=this.complaints.getResolvedCleanlinessComplaint()
  .subscribe(
    data=>{
      this.cleanlinessResolvedComplaintsInfo=data;
      console.log(this.cleanlinessResolvedComplaintsInfo);
    }
  )

  this.leResolvedComplaintsData=this.complaints.getResolvedLEComplaints()
  .subscribe(
    data=>{
      this.leResolvedComplaintsInfo=data;
      console.log(this.leResolvedComplaintsInfo);
    }
  )

  this.cwnResolvedComplaintsData=this.complaints.getResolvedCWNComplaints()
  .subscribe(
    data=>{
      this.cwnResolvedComplaintsInfo=data;
      console.log(this.cwnResolvedComplaintsInfo);
    }
  )

  this.eccwResolvedComplaintsData=this.complaints.getResolvedECCWComplaints()
  .subscribe(
    data=>{
      this.eccwResolvedComplaintsInfo=data;
      console.log(this.cleanlinessResolvedComplaintsInfo);
    }
  )

  this.otherResolvedComplaintsData=this.complaints.getResolvedOtherComplaints()
  .subscribe(
    data=>{
      this.otherResolvedComplaintsInfo=data;
      console.log(this.otherResolvedComplaintsInfo);
    }
  )

  this.facultyResolvedComplaintsData=this.complaints.getResolvedFacultyComplaints()
  .subscribe(
    data=>{
      this.facultyResolvedComplaintsInfo=data;
      console.log(this.facultyResolvedComplaintsInfo);
    }
  )

  this.stuResolvedComplaintsData=this.complaints.getResolvedStudentComplaints()
  .subscribe(
    data=>{
      this.stuResolvedComplaintsInfo=data;
      console.log(this.stuResolvedComplaintsInfo);
    }
  )

  this.emrsResolvedComplaintsData=this.complaints.getResolvedEMRSComplaints()
  .subscribe(
    data=>{
      this.emrsResolvedComplaintsInfo=data;
      console.log(this.emrsResolvedComplaintsInfo);
    }
  )

  this.telephoneResolvedComplaintsData=this.complaints.getResolvedTelephoneComplaints()
  .subscribe(
    data=>{
      this.telephoneResolvedComplaintsInfo=data;
      console.log(this.telephoneResolvedComplaintsInfo);
    }
  )
  }

}
