import { Component, OnInit, Input } from '@angular/core';
import { ProfileService } from 'src/app/API_Service/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  @Input() profileData: any;
  staffBasicProfile:any;
  userId:string="196";
  
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
     //console.log(this.profileData);
     
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
