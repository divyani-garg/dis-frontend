import { Component, OnInit, Input} from '@angular/core';
import { ComplaintsService } from 'src/app/API_Service/complaints.service';


@Component({
  selector: 'app-remaining-complaints',
  templateUrl: './remaining-complaints.component.html',
  styleUrls: ['./remaining-complaints.component.scss'],
})
export class RemainingComplaintsComponent implements OnInit {
  
  @Input() cleanlinessRemainingComplaintsData:any;
  @Input() leRemainingComplaintsData:any; 
  @Input() cwnRemainingComplaintsData:any;
  @Input() eccwRemainingComplaintsData:any;
  @Input() otherRemainingComplaintsData:any;
  @Input() facultyRemainingComplaintsData:any;
  @Input() stuRemainingComplaintsData:any;
  @Input() emrsRemainingComplaintsData:any;
  @Input() telephoneRemainingComplaintsData:any;
  cleanlinessRemainingComplaintsInfo:any[];
  leRemainingComplaintsInfo:any[];
  cwnRemainingComplaintsInfo:any[];
  eccwRemainingComplaintsInfo:any[];
  otherRemainingComplaintsInfo:any[];
  facultyRemainingComplaintsInfo:any[];
  stuRemainingComplaintsInfo:any[];
  emrsRemainingComplaintsInfo:any[];
  telephoneRemainingComplaintsInfo:any[];
  constructor(private complaints:ComplaintsService) { }

  ngOnInit() {
  this.cleanlinessRemainingComplaintsData=this.complaints.getRemainingCleanlinessComplaint()
  .subscribe(
    data=>{
      this.cleanlinessRemainingComplaintsInfo=data;
      console.log(this.cleanlinessRemainingComplaintsInfo);
    }
  )

  this.leRemainingComplaintsData=this.complaints.getRemainingLEComplaints()
  .subscribe(
    data=>{
      this.leRemainingComplaintsInfo=data;
      console.log(this.leRemainingComplaintsInfo);
    }
  )

  this.cwnRemainingComplaintsData=this.complaints.getRemainingCWNComplaints()
  .subscribe(
    data=>{
      this.cwnRemainingComplaintsInfo=data;
      console.log(this.cwnRemainingComplaintsInfo);
    }
  )

  this.eccwRemainingComplaintsData=this.complaints.getRemainingECCWComplaints()
  .subscribe(
    data=>{
      this.eccwRemainingComplaintsInfo=data;
      console.log(this.cleanlinessRemainingComplaintsInfo);
    }
  )

  this.otherRemainingComplaintsData=this.complaints.getRemainingOtherComplaints()
  .subscribe(
    data=>{
      this.otherRemainingComplaintsInfo=data;
      console.log(this.otherRemainingComplaintsInfo);
    }
  )

  this.facultyRemainingComplaintsData=this.complaints.getRemainingFacultyComplaints()
  .subscribe(
    data=>{
      this.facultyRemainingComplaintsInfo=data;
      console.log(this.facultyRemainingComplaintsInfo);
    }
  )

  this.stuRemainingComplaintsData=this.complaints.getRemainingStudentComplaints()
  .subscribe(
    data=>{
      this.stuRemainingComplaintsInfo=data;
      console.log(this.stuRemainingComplaintsInfo);
    }
  )

  this.emrsRemainingComplaintsData=this.complaints.getRemainingEMRSComplaints()
  .subscribe(
    data=>{
      this.emrsRemainingComplaintsInfo=data;
      console.log(this.emrsRemainingComplaintsInfo);
    }
  )

  this.telephoneRemainingComplaintsData=this.complaints.getRemainingTelephoneComplaints()
  .subscribe(
    data=>{
      this.telephoneRemainingComplaintsInfo=data;
      console.log(this.telephoneRemainingComplaintsInfo);
    }
  )
  }
  
  
  
  // public popoverTitle: string = 'Is complaint is resolved?';
  // public popoverMessage: string = 'Do you want to continue?';
  // public confirmClicked: boolean = false;
  // public cancelClicked: boolean = false;
}
