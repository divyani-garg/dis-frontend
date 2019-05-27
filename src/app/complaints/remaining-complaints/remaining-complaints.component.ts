import { Component, OnInit, Input } from '@angular/core';
import { ComplaintsService } from 'src/app/API_Service/complaints.service';


@Component({
  selector: 'app-remaining-complaints',
  templateUrl: './remaining-complaints.component.html',
  styleUrls: ['./remaining-complaints.component.scss'],
})
export class RemainingComplaintsComponent implements OnInit {
  userType : string = localStorage.getItem('userType');
  student : boolean;
  staff : boolean;
  isFaculty : boolean;
  hod : boolean;
  count:number=0;
  cleanliness: boolean;
  le: boolean;
  cwn: boolean;
  ecc: boolean;
  other: boolean;
  faculty: boolean;
  stu: boolean;
  emrs: boolean;
  telephone: boolean;
  @Input() cleanlinessRemainingComplaintsData: any;
  @Input() leRemainingComplaintsData: any;
  @Input() cwnRemainingComplaintsData: any;
  @Input() eccwRemainingComplaintsData: any;
  @Input() otherRemainingComplaintsData: any;
  @Input() facultyRemainingComplaintsData: any;
  @Input() stuRemainingComplaintsData: any;
  @Input() emrsRemainingComplaintsData: any;
  @Input() telephoneRemainingComplaintsData: any;
  cleanlinessRemainingComplaintsInfo: any[];
  leRemainingComplaintsInfo: any[];
  cwnRemainingComplaintsInfo: any[];
  eccwRemainingComplaintsInfo: any[];
  otherRemainingComplaintsInfo: any[];
  facultyRemainingComplaintsInfo: any[];
  stuRemainingComplaintsInfo: any[];
  emrsRemainingComplaintsInfo: any[];
  telephoneRemainingComplaintsInfo: any[];
  constructor(private complaints: ComplaintsService) { }

  ngOnInit() {

    this.student=false;
    this.staff=false;
    this.isFaculty=false;
    this.hod=false;

    this.cleanliness = true;
    this.le = true;
    this.cwn = true;
    this.ecc = true;
    this.other = true;
    this.faculty = true;
    this.stu = true;
    this.emrs = true;
    this.telephone = true;

    if( this.userType === "student")
    {
      this.student = true;
    }
    if( this.userType === "staff"){
      this.staff = true;
    }
    if( this.userType === "head"){
      this.hod = true;
    }
    if(this.userType === "faculty")
    {
      this.isFaculty = true;
    }
 
    this.cleanlinessRemainingComplaintsData = this.complaints.getRemainingCleanlinessComplaint()
      .subscribe(
        data => {
          this.cleanlinessRemainingComplaintsInfo = data;
          console.log(this.cleanlinessRemainingComplaintsInfo);
        }
      )

    this.leRemainingComplaintsData = this.complaints.getRemainingLEComplaints()
      .subscribe(
        data => {
          this.leRemainingComplaintsInfo = data;
          console.log(this.leRemainingComplaintsInfo);
        }
      )

    this.cwnRemainingComplaintsData = this.complaints.getRemainingCWNComplaints()
      .subscribe(
        data => {
          this.cwnRemainingComplaintsInfo = data;
          console.log(this.cwnRemainingComplaintsInfo);
        }
      )

    this.eccwRemainingComplaintsData = this.complaints.getRemainingECCWComplaints()
      .subscribe(
        data => {
          this.eccwRemainingComplaintsInfo = data;
          console.log(this.eccwRemainingComplaintsInfo);
        }
      )

    this.otherRemainingComplaintsData = this.complaints.getRemainingOtherComplaints()
      .subscribe(
        data => {
          this.otherRemainingComplaintsInfo = data;
          console.log(this.otherRemainingComplaintsInfo);
        }
      )

    this.facultyRemainingComplaintsData = this.complaints.getRemainingFacultyComplaints()
      .subscribe(
        data => {
          this.facultyRemainingComplaintsInfo = data;
          console.log(this.facultyRemainingComplaintsInfo);
        }
      )

    this.stuRemainingComplaintsData = this.complaints.getRemainingStudentComplaints()
      .subscribe(
        data => {
          this.stuRemainingComplaintsInfo = data;
          console.log(this.stuRemainingComplaintsInfo);
        }
      )

    this.emrsRemainingComplaintsData = this.complaints.getRemainingEMRSComplaints()
      .subscribe(
        data => {
          this.emrsRemainingComplaintsInfo = data;
          console.log(this.emrsRemainingComplaintsInfo);
        }
      )

    this.telephoneRemainingComplaintsData = this.complaints.getRemainingTelephoneComplaints()
      .subscribe(
        data => {
          this.telephoneRemainingComplaintsInfo = data;
          console.log(this.telephoneRemainingComplaintsInfo);
        }
      )
  }

  showAll() {
    this.cleanliness = true;
    this.le = true;
    this.cwn = true;
    this.ecc = true;
    this.other = true;
    this.faculty = true;
    this.stu = true;
    this.emrs = true;
    this.telephone = true;
    }
 showOther() {
    this.cleanliness = false;
    this.le = false;
    this.cwn = false;
    this.ecc = false;
    this.other = true;
    this.faculty = false;
    this.stu = false;
    this.emrs = false;
    this.telephone = false;
  }
  showStudent() {
    this.cleanliness = false;
    this.le = false;
    this.cwn = false;
    this.ecc = false;
    this.other = false;
    this.faculty = false;
    this.stu = true;
    this.emrs = false;
    this.telephone = false;
  }
  showCleanliness() {
    this.cleanliness = true;
    this.le = false;
    this.cwn = false;
    this.ecc = false;
    this.other = false;
    this.faculty = false;
    this.stu = false;
    this.emrs = false;
    this.telephone = false;
  }
  showLe() {
    this.cleanliness = false;
    this.le = true;
    this.cwn = false;
    this.ecc = false;
    this.other = false;
    this.faculty = false;
    this.stu = false;
    this.emrs = false;
    this.telephone = false;
  }
  showCwn() {
    this.cleanliness = false;
    this.le = false;
    this.cwn = true;
    this.ecc = false;
    this.other = false;
    this.faculty = false;
    this.stu = false;
    this.emrs = false;
    this.telephone = false;
  }
  showEcc() {
    this.cleanliness = false;
    this.le = false;
    this.cwn = false;
    this.ecc = true;
    this.other = false;
    this.faculty = false;
    this.stu = false;
    this.emrs = false;
    this.telephone = false;
  }
  showFaculty() {
    this.cleanliness = false;
    this.le = false;
    this.cwn = false;
    this.ecc = false;
    this.other = false;
    this.faculty = true;
    this.stu = false;
    this.emrs = false;
    this.telephone = false;
  }
  showEmrs() {
    this.cleanliness = false;
    this.le = false;
    this.cwn = false;
    this.ecc = false;
    this.other = false;
    this.faculty = false;
    this.stu = false;
    this.emrs = true;
    this.telephone = false;
  }
  showTelephone() {
    this.cleanliness = false;
    this.le = false;
    this.cwn = false;
    this.ecc = false;
    this.other = false;
    this.faculty = false;
    this.stu = false;
    this.emrs = false;
    this.telephone = true;
   }
  // public popoverTitle: string = 'Is complaint is resolved?';
  // public popoverMessage: string = 'Do you want to continue?';
  // public confirmClicked: boolean = false;
  // public cancelClicked: boolean = false;
}
