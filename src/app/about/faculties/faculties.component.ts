import { Component, OnInit } from '@angular/core';
import { facultyData } from 'src/app/Model/facultyData';
import { FacultyDataService } from 'src/app/hod/faculty/faculty-data.service';

@Component({
  selector: 'app-faculties',
  templateUrl: './faculties.component.html',
  styleUrls: ['./faculties.component.scss']
})
export class FacultiesComponent implements OnInit {
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
