import { Component, OnInit } from '@angular/core';
import { PiechartComponent } from 'src/app/miscellaneous/piechart/piechart.component';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.scss']
})
export class AttendanceComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

  //bar = [];
  //constructor(public chart: PiechartComponent) { }

  //ngOnInit() {
    //this.bar = this.chart.getPieChart('pieChart');
 // }

}
