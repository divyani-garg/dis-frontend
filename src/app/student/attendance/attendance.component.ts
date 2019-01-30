import { Component, OnInit } from '@angular/core';
import { BarchartComponent } from './../../miscellaneous/barchart/barchart.component';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.scss']
})
export class AttendanceComponent implements OnInit {

  bar = [];
  constructor(public chart: BarchartComponent) { }

  ngOnInit() {
    this.bar = this.chart.getBarChart('barChart');
  }

}
