import { Component, OnInit } from '@angular/core';
import { InfraService } from '../services/infra.service';
import { Laboratory } from "../models/Laboratory";
import { Others } from '../models/Others';
import { FacultyRoom } from '../models/FacultyRoom';
import { facultyData } from 'src/app/Model/facultyData';
import { FacultyDataService } from 'src/app/hod/faculty/faculty-data.service';
import { Classroom } from '../models/Classroom';
import { AddInfrastructure } from '../models/AddInfrastructure';

@Component({
  selector: 'app-infrastructure',
  templateUrl: './infrastructure.component.html',
  styleUrls: ['./infrastructure.component.scss']
})
export class InfrastructureComponent implements OnInit {
  labs: Laboratory[] = [];
  others : Others[] = [];
  facultyRooms: FacultyRoom[] = [];
  fData : facultyData []=[];
  sData : facultyData []=[];
  classroomData : Classroom [] = [];
  model: AddInfrastructure = new AddInfrastructure();

  constructor(private infraservice: InfraService, private faculty_service: FacultyDataService) { 
    // this.getallLabs();
    this.getallOthers();
    // this.getFacultyRooms();
    // this.getFacultyData();
    // this.getStaffData();
    // this.getClassrooms();
  }
  
  getallLabs(): void {
    this.infraservice.getLabs()
        .subscribe(data => this.labs = data);
  }
  getallOthers(): void {
    this.infraservice.getOtherInfra()
        .subscribe(data => this.others = data);
  }

  getFacultyRooms(): void{
    this.infraservice.getFacultyRooms()
      .subscribe(data =>this.facultyRooms = data);
  }

  infraName(l: Laboratory): void{
    this.infraservice.setInfraName(l);
  }
  
  getFacultyData(): void{
    this.faculty_service.getFacultyData()
      .subscribe(data => this.fData=data);
      console.log(this.fData);
  }

  getClassrooms(): void{
    this.infraservice.getClassrooms()
      .subscribe( data => this.classroomData = data);
  }
  
  getStaffData(): void{
    this.faculty_service.getStaffData()
      .subscribe(data =>this.sData = data);
      console.log(this.sData);
  }

  onSubmit(): void{
    console.log(this.model);
    this.infraservice.addInfrastructure(this.model);
  }


  ngOnInit() { 
   
  }

}
