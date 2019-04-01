import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import 'datatables.net'

@Component({
  selector: 'app-expertlecture',
  templateUrl: './expertlecture.component.html',
  styleUrls: ['./expertlecture.component.scss']
})
export class ExpertlectureComponent implements OnInit {
 public tableWidget: any;
  constructor() { }

  ngOnInit() {
   this.initDatatable()
  }
  private initDatatable(): void {
    let exampleId: any = $('#myQuizTable');
    this.tableWidget = exampleId.DataTable({
      select: true
    });
  }
}
