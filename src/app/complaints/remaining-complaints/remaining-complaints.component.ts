import { Component, OnInit, Input } from '@angular/core';
import { ComplaintsService } from 'src/app/API_Service/complaints.service';


@Component({
  selector: 'app-remaining-complaints',
  templateUrl: './remaining-complaints.component.html',
  styleUrls: ['./remaining-complaints.component.scss'],
})
export class RemainingComplaintsComponent implements OnInit {
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

    this.cleanliness = true;
    this.le = true;
    this.cwn = true;
    this.ecc = true;
    this.other = true;
    this.faculty = true;
    this.stu = true;
    this.emrs = true;
    this.telephone = true;

    this.cleanlinessRemainingComplaintsData = this.complaints.getRemainingCleanlinessComplaint()
      .subscribe(
        data => {
          this.cleanlinessRemainingComplaintsInfo = data;
          console.log(this.cleanlinessRemainingComplaintsInfo);
          if(this.cleanlinessRemainingComplaintsInfo!=null)
          {
            this.getCleanlinessLength(this.cleanlinessRemainingComplaintsInfo.length);
        
          }  
          }
      )

    this.leRemainingComplaintsData = this.complaints.getRemainingLEComplaints()
      .subscribe(
        data => {
          this.leRemainingComplaintsInfo = data;
          console.log(this.leRemainingComplaintsInfo);
          this.getLeLength(this.leRemainingComplaintsInfo.length);
        }
      )

    this.cwnRemainingComplaintsData = this.complaints.getRemainingCWNComplaints()
      .subscribe(
        data => {
          this.cwnRemainingComplaintsInfo = data;
          console.log(this.cwnRemainingComplaintsInfo);
          this.getCwnLength(this.cwnRemainingComplaintsInfo.length);
        }
      )

    this.eccwRemainingComplaintsData = this.complaints.getRemainingECCWComplaints()
      .subscribe(
        data => {
          this.eccwRemainingComplaintsInfo = data;
          console.log(this.eccwRemainingComplaintsInfo);
          this.getEccLength(this.eccwRemainingComplaintsInfo.length);
        }
      )

    this.otherRemainingComplaintsData = this.complaints.getRemainingOtherComplaints()
      .subscribe(
        data => {
          this.otherRemainingComplaintsInfo = data;
          console.log(this.otherRemainingComplaintsInfo);
          this.getOtherLength(this.otherRemainingComplaintsInfo.length);
        }
      )

    this.facultyRemainingComplaintsData = this.complaints.getRemainingFacultyComplaints()
      .subscribe(
        data => {
          this.facultyRemainingComplaintsInfo = data;
          console.log(this.facultyRemainingComplaintsInfo);
          this.getFacultyLength(this.facultyRemainingComplaintsInfo.length);
        }
      )

    this.stuRemainingComplaintsData = this.complaints.getRemainingStudentComplaints()
      .subscribe(
        data => {
          this.stuRemainingComplaintsInfo = data;
          console.log(this.stuRemainingComplaintsInfo);
          this.getStudentLength(this.stuRemainingComplaintsInfo.length);
        }
      )

    this.emrsRemainingComplaintsData = this.complaints.getRemainingEMRSComplaints()
      .subscribe(
        data => {
          this.emrsRemainingComplaintsInfo = data;
          console.log(this.emrsRemainingComplaintsInfo);
          this.getEmrsLength(this.emrsRemainingComplaintsInfo.length);
        }
      )

    this.telephoneRemainingComplaintsData = this.complaints.getRemainingTelephoneComplaints()
      .subscribe(
        data => {
          this.telephoneRemainingComplaintsInfo = data;
          console.log(this.telephoneRemainingComplaintsInfo);
          this.getTelephoneLength(this.telephoneRemainingComplaintsInfo.length);
        }
      )
  }

  getCleanlinessLength(len:number){
    this.count=this.count+len;
    console.log(this.count);
  }
  getLeLength(len:number){
    this.count+=len;
  }
  getCwnLength(len:number){
    this.count+=len;
  }
  getEccLength(len:number){
    this.count+=len;
  }
  getOtherLength(len:number){
    this.count+=len;
  }
  getFacultyLength(len:number){
    this.count+=len;
  }
  getStudentLength(len:number){
    this.count+=len;
  }
  getEmrsLength(len:number){
    this.count+=len;
  }
  getTelephoneLength(len:number){
    this.count+=len;
    console.log(this.count);
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
