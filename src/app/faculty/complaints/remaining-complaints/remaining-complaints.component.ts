import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-remaining-complaints',
  templateUrl: './remaining-complaints.component.html',
  styleUrls: ['./remaining-complaints.component.scss']
})
export class RemainingComplaintsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  clickMethod() {
    if(confirm("Are you sure you want to continue")) {
      
    }
  }
  
}
