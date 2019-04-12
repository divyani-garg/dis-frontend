import { StudentAttendanceService } from './../student-attendance.service';
import { Component, OnInit } from '@angular/core';
import { BarchartComponent } from './../../miscellaneous/barchart/barchart.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  bar = [];
  constructor(public chart: BarchartComponent, private attendanceHandler: StudentAttendanceService) { }

  ngOnInit() {
     this.drawbarChart();
  }

  drawbarChart() {
    this.attendanceHandler.getAttendancePercentage().subscribe(data => {
      const attendance = data;
      console.log(attendance);
      let labels = [];
      let values =[];
      for(let i = 0; i < attendance.length; i++) {
          if(attendance[i].hasOwnProperty('practicalPercent')) {
            labels.push(attendance[i].subjectCode + ' - P');
            values.push(attendance[i].practicalPercent);
          }
          if(attendance[i].hasOwnProperty('theoryPercent')) {
            labels.push(attendance[i].subjectCode + ' - T');
            values.push(attendance[i].theoryPercent);
          }
      }
      console.log(labels);
      console.log(values);
      this.bar = this.chart.getBarChart('barChart', labels, values, null);
    });
  }
}
