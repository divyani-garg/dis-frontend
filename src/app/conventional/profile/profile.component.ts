import { Component, OnInit, Input } from '@angular/core';
import { ProfileService } from 'src/app/API_Service/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  @Input() profileData: any;
  @Input() workExperienceData: any;
  @Input() userQualificationData:any;
  @Input() userResearchWorkData: any;
  @Input() userInternshipData:any;
  @Input() userProjectData:any;
  userInternshipInfo:any[];
  userQualificationInfo:any[];
  workExperienceInfo:any[];
  userProjectInfo:any[];
  staffBasicProfile:any;
  userId:string="196";
 
  userResearchWorkInfo:any[];
  
  constructor(private profile:ProfileService) { }

  ngOnInit() {
    this.profileData=this.profile.getProfileInfo()
    .subscribe(
      data=>{
          if(this.checkAuthenticateUser(data.employeeId)){
            this.staffBasicProfile=data;
            }
          console.log(this.staffBasicProfile);
      },
     )
     this.workExperienceData=this.profile.getWorkExperienceInfo()
     .subscribe(
       data=>{
        // if(this.checkAuthenticateUser(data.employeeId))
         //{
           this.workExperienceInfo=data;
         //}
         console.log(this.workExperienceInfo);
       }
     )
     this.userQualificationData=this.profile.getUserQualificationInfo()
     .subscribe(
       data=>{
         this.userQualificationInfo=data;
         console.log(this.userQualificationInfo); 
        }
     ) 
     this.userResearchWorkData=this.profile.getUserResearchWorkInfo()
     .subscribe(
       data=>{
         this.userResearchWorkInfo=data;
         console.log(this.userResearchWorkInfo);
       }
     )
     this.userInternshipData=this.profile.getUserInternshipInfo()
     .subscribe(
       data=>{
         this.userInternshipInfo=data;
         console.log(this.userInternshipInfo);
       }
     )

     this.userProjectData=this.profile.getUserProjectInfo()
     .subscribe(
       data=>{
         this.userProjectInfo=data;
         console.log(this.userInternshipInfo);
       }
     )
      
  }
    checkAuthenticateUser(id):boolean
     {
       if(id===this.userId)
       {
         return true;
       }
       else
       {
          return false;
       }
     } 
    
}
