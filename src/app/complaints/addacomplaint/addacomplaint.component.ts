import { Component, OnInit } from '@angular/core';
import { ComplaintsService } from 'src/app/API_Service/complaints.service';
import { AddACleanlinessComplaint } from '../complaints_cleanliness';

@Component({
  selector: 'app-addacomplaint',
  templateUrl: './addacomplaint.component.html',
  styleUrls: ['./addacomplaint.component.scss']
})
export class AddacomplaintComponent implements OnInit {

  form:any={};
  addACleanlinessComplaint: AddACleanlinessComplaint;
  constructor(private complaints:ComplaintsService) { }
  

  ngOnInit() {
  }
  onSubmit(){
    console.log(this.form);
    this.addACleanlinessComplaint=new AddACleanlinessComplaint(
      this.form.location,this.form.levelOfDustness,this.form.detail
    );
    this.complaints.AddACleanlinessComplaint(this.addACleanlinessComplaint).subscribe(
      data=>{
        console.log(data);

      },
      error=>{
        console.log(error+" Error Come");
      }
    );
  }
}
