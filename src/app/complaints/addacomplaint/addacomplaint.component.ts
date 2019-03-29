import { Component, OnInit } from '@angular/core';
import { ComplaintsService } from 'src/app/API_Service/complaints.service';
import { AddACleanlinessComplaint } from '../complaints_cleanliness';
import { AddOtherComplaint } from '../complaints_other';

@Component({
  selector: 'app-addacomplaint',
  templateUrl: './addacomplaint.component.html',
  styleUrls: ['./addacomplaint.component.scss']
})
export class AddacomplaintComponent implements OnInit {

  form:any={};
  other:any={};
  info: AddACleanlinessComplaint;
  otherComplaint : AddOtherComplaint;
  constructor(private complaints:ComplaintsService) { }
  

  ngOnInit() {
  }
  onSubmit(){
    console.log(this.form);
    this.info=new AddACleanlinessComplaint(
      this.form.location,this.form.levelOfDust,this.form.details
    );
    console.log(this.info);
    this.complaints.addACleanlinessComplaint(this.info).subscribe(
      data=>{
        console.log(data);
        document.getElementById("status").innerHTML="Your Complaint is Successfully Registered!!";
        
      },
      error=>{
        document.getElementById("status").innerHTML="Error while registering your complaint!!";
      }
    );
  }

  onOtherSubmit(){
    console.log(this.other);
    this.otherComplaint=new AddOtherComplaint(
     this.other.details
    );
    console.log(this.otherComplaint);
    this.complaints.addOtherComplaint(this.otherComplaint).subscribe(
      data=>{
        console.log(data);
        document.getElementById("status").innerHTML="Your Complaint is Successfully Registered!!";
        
      },
      error=>{
        console.log(error);
        document.getElementById("status").innerHTML="Error while registering your complaint!!";
      }
    );
  }

  }
