import { Component, OnInit, Input } from '@angular/core';
import { ComplaintsService } from 'src/app/API_Service/complaints.service';

@Component({
  selector: 'app-side-navigation',
  templateUrl: './side-navigation.component.html',
  styleUrls: ['./side-navigation.component.scss']
})
export class SideNavigationComponent implements OnInit {
  remaining:any;
  resolved:any;
  total:any;
  my:any;
  constructor(private complaints:ComplaintsService) { }

  ngOnInit() {
   this.complaints.getRemainingComplaintCount()
   .subscribe(
    data=>{
      this.remaining=data;
      console.log(this.remaining);
    }
   ); 
  
  this.complaints.getResolvedComplaintCount()
   .subscribe(
    data=>{
      this.resolved=data;
      console.log(this.resolved);
    }
   ); 
  
  this.complaints.getTotalComplaintCount()
   .subscribe(
    data=>{
      this.total=data;
      console.log(this.total);
    }
   ); 
  
  this.complaints.getMyComplaintCount()
   .subscribe(
    data=>{
      this.my=data;
      console.log(this.my);
    }
   ); 
  }
}
