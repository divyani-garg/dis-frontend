import { Component, OnInit } from '@angular/core';
import { facultyData } from 'src/app/Model/facultyData';
import { FacultyDataService } from './faculty-data.service';
import { StaffDataService } from './staff-data.service';

@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.scss']
})
export class FacultyComponent implements OnInit {
  fData : facultyData=new facultyData();
  constructor(private faculty_service: FacultyDataService) { 
    this.getFacultyData();
  }

  getFacultyData(): void{
    this.faculty_service.getFacultyData()
      .subscribe(data => this.fData=data);
      console.log(this.fData);
  }
  
  ngOnInit() {
  }

}
