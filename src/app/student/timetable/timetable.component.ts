import { SemesterSubjectsService } from './../../API_Service/SemesterSubjectsService';
import { TimetableService } from './../../API_Service/timetable.service';
import { Component, OnInit } from '@angular/core';
import { StudentTimetableService } from '../student-timetable.service';

@Component({
  selector: 'app-timetable',
  templateUrl: './timetable.component.html',
  styleUrls: ['./timetable.component.scss']
})
export class TimetableComponent implements OnInit {

  columnHeaders: any[];
  schedule: any[];
  mySubjects: any;

  // tslint:disable-next-line:max-line-length
  constructor(public timetable: TimetableService, private studentTimetableHandler: StudentTimetableService, private semSubjects: SemesterSubjectsService) { }
  ngOnInit() {
    this.studentTimetableHandler.getTimetable().subscribe(data => {
      const timetableData = this.timetable.generateTimeTable(data);
      this.schedule = timetableData[1];
      this.columnHeaders = timetableData[0];
    });

    this.mySubjects = this.semSubjects.getSyllabusPdf();
  }

}
