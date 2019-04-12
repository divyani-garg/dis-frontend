import { StudentAttendanceService } from './../student-attendance.service';
import { Component, OnInit,ViewChild } from '@angular/core';
import { BarchartComponent } from './../../miscellaneous/barchart/barchart.component';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.scss']
})
export class AttendanceComponent implements OnInit {

  bar: any;
  subjectAttendance: any[];
  currentSubject: any;
  tableWidget: any;
  dataTable: any;

  constructor(public chart: BarchartComponent, public attendanceHandler: StudentAttendanceService) { }

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
            labels.push(attendance[i].subjectCode + '-P');
            values.push(attendance[i].practicalPercent);
          }
          if(attendance[i].hasOwnProperty('theoryPercent')) {
            labels.push(attendance[i].subjectCode + '-T');
            values.push(attendance[i].theoryPercent);
          }
      }
      console.log(labels);
      console.log(values);
      this.bar = this.chart.getBarChart('barChart', labels, values, this.inSights);
    });
  }

  inSights = (evt) => {
    var points = this.bar.getElementsAtEvent(evt);
    console.log(points);
    if(points.length>0)
    {
      let clickedElementindex = points[0]['_index'];
      this.currentSubject = points[0]['_xScale']['ticks'][clickedElementindex];
      console.log(this.currentSubject);
      this.displaySubjectAttendance(this.currentSubject.slice(0,-2));

    }
  }

  displaySubjectAttendance(subjectCode) {
      this.attendanceHandler.getSubjectwiseAttendance(subjectCode).subscribe(data => {
        console.log(data);
        this.subjectAttendance = data;
        this.openNav();
      })
  }

  openNav() {
    document.getElementById('applyforleave').style.width = '250px';
    document.getElementById('main').className = 'col-lg-7';
    document.getElementById('leaveinfo').className = 'col-lg-7';
    document.getElementById('applyforleave').className = 'col-lg-5 sidenavbar';
  }

  /* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
 closeNav() {
    document.getElementById('applyforleave').style.width = '0';
    document.getElementById('applyforleave').className = 'col-lg-0 sidenavbar';
    document.getElementById('main').className = 'col-lg-12';
    document.getElementById('leaveinfo').className = 'col-lg-12';
  }

  showLeaves() {
    document.getElementById('main').style.display = 'none';
    document.getElementById('leaveinfo').style.display = 'block';
    this.closeNav();
  }

  showChart() {
    document.getElementById('main').style.display = 'block';
    document.getElementById('leaveinfo').style.display = 'none';
    this.closeNav();
  }

}
