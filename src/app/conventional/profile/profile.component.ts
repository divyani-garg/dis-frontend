import { Component, OnInit, Input } from '@angular/core';
import { ProfileService } from 'src/app/API_Service/profile.service';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms'
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  userType : boolean ;
  form : any = {};
  userInternshipInfo: any[] = [];
  userQualificationInfo: any[];
  workExperienceInfo: any[];
  userProjectInfo: any[];
  userCompetitiveExamInfo: any[];
  userCulturalActivityInfo: any[];
  userTechnicalActivityInfo: any[];
  userAddressInfo: any[];
  facultyStaffListInfo: any[];
  userResearchWorkInfo: any[];
  
  studentProfile: any;
  staffBasicProfile: any;
  
  student: boolean;
  staff: boolean;
  
  //form groups
  editStaffBasicProfileFormGroup : FormGroup;
  mobileNo : number;
  alternateMobileNo : number;
  bloodGroup : string;
  dob : string;
  fatherName : string;
  motherName : string;
  areaOfSpecialization : string;
  userId : string;
  title : string;

  constructor(private profile: ProfileService, private fb : FormBuilder) { 
   
  }

  ngOnInit() {
    
    this.student = false;
    this.staff = true;
    this.profile.getProfileInfo()
      .subscribe(
        data => {
          this.staffBasicProfile = data;
          console.log(this.staffBasicProfile);
          // if(this.staffBasicProfile.userType != "student"){
          //   this.staff = true;
          //}
         
          this.editStaffBasicProfileFormGroup = this.fb.group({
            mobileNo : [''],
            alternateMobileNo : [''],
            bloodGroup : [''],
            dob : [''],
            areaOfSpecialization : [''],
            fatherName : [''],
            motherName : [''],
            userId : ['']
          })
          if(this.staffBasicProfile){
          this.mobileNo = this.staffBasicProfile.mobileNo;
          this.alternateMobileNo=  this.staffBasicProfile.alternateMobileNo;
          this.bloodGroup = this.staffBasicProfile.bloodGroup;
          this.dob = this.staffBasicProfile.dob;
          this.areaOfSpecialization = this.staffBasicProfile.areaOfSpecialization;
          this.fatherName = this.staffBasicProfile.fatherName;
          this.motherName = this.staffBasicProfile.motherName;
          this.userId = this.staffBasicProfile.userId;
          }
        },
      )

    this.profile.getStudentProfileInfo()
      .subscribe(
        data => {
          this.studentProfile = data;
          // if(this.studentProfile.userType === "student"){
          //   this.student = true;
          // }
          
          console.log(this.studentProfile);
        }
      )
     
      
        
    this.profile.getWorkExperienceInfo()
      .subscribe(
        data => {
          this.workExperienceInfo = data;
          console.log(this.workExperienceInfo);
        }
      )
    this.profile.getUserQualificationInfo()
      .subscribe(
        data => {
          this.userQualificationInfo = data;
          console.log(this.userQualificationInfo);
        }
      )
    this.profile.getUserResearchWorkInfo()
      .subscribe(
        data => {
          this.userResearchWorkInfo = data;
          console.log(this.userResearchWorkInfo);
        }
      )
    this.profile.getUserInternshipInfo()
      .subscribe(
        data => {
          this.userInternshipInfo = data;
          console.log(this.userInternshipInfo);
          }
      )

    this.profile.getUserProjectInfo()
      .subscribe(
        data => {
          this.userProjectInfo = data;
          console.log(this.userProjectInfo);
         }
      )

    this.profile.getUserCompetitiveExamInfo()
      .subscribe(
        data => {
          this.userCompetitiveExamInfo = data;
          console.log(this.userCompetitiveExamInfo);
         }
      )

    this.profile.getUserCulturalActivityInfo()
      .subscribe(
        data => {
          this.userCulturalActivityInfo = data;
          console.log(this.userCulturalActivityInfo);
         }
      )

    this.profile.getUserTechnicalActivityInfo()
      .subscribe(
        data => {
          this.userTechnicalActivityInfo = data;
          console.log(this.userTechnicalActivityInfo);
         }
      )

    this.profile.getUserAddressInfo()
      .subscribe(
        data => {
          this.userAddressInfo = data;
          console.log(this.userAddressInfo);
        }
      )

    this.profile.getFacultyStaffList()
      .subscribe(
        data => {
          this.facultyStaffListInfo = data;
          console.log(this.facultyStaffListInfo);
        }
      )
  }
  updateStaffBasicProfileData(details):void{
    console.log(details);
  }
  updateResearchWork(details):void{
    console.log(details);
    console.log(this.title);
  }
  updateExperienceData(value):void{
console.log(value);
  }
  submit(){
    console.log(this.form);
  }
}