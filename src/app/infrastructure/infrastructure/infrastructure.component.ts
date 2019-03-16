import { Component, OnInit } from '@angular/core';
import { InfraService } from '../services/infra.service';
import { Laboratory } from "../models/Laboratory";
import { Others } from '../models/Others';
import { FacultyRoom } from '../models/FacultyRoom';

@Component({
  selector: 'app-infrastructure',
  templateUrl: './infrastructure.component.html',
  styleUrls: ['./infrastructure.component.scss']
})
export class InfrastructureComponent implements OnInit {
  labs: Laboratory = new Laboratory();
  others: Others = new Others();
  facultyRooms: FacultyRoom = new FacultyRoom();

  constructor(private infraservice: InfraService) { 
    this.getallLabs();
    this.getallOthers();
    this.getFacultyRooms();
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

  ngOnInit() { 
  }

}
