import { Component, OnInit } from '@angular/core';
import { InfraService } from '../services/infra.service';
import { Laboratory } from "../models/Laboratory";
import { Observable } from 'rxjs';
import { Others } from '../models/Others';

@Component({
  selector: 'app-infrastructure',
  templateUrl: './infrastructure.component.html',
  styleUrls: ['./infrastructure.component.scss']
})
export class InfrastructureComponent implements OnInit {
  labs: Laboratory = new Laboratory();
  others: Others = new Others();

  constructor(private infraservice: InfraService) { 
    this.getallLabs();
    this.getallOthers();
  }
  
  getallLabs(): void {
    this.infraservice.getLabs()
        .subscribe(data => this.labs = data);
  }
  getallOthers(): void {
    this.infraservice.getOtherInfra()
        .subscribe(data => this.others = data);
  }

  ngOnInit() { 
  }

}
