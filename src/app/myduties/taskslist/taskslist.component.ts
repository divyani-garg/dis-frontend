import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import 'datatables.net'
@Component({
  selector: 'app-taskslist',
  templateUrl: './taskslist.component.html',
  styleUrls: ['./taskslist.component.scss']
})
export class TaskslistComponent implements OnInit {
  public tableWidget: any;
  constructor() { }

  ngOnInit() {
   this.initDatatable()
  }
  private initDatatable(): void {
    let exampleId: any = $('#myTaskTable');
    this.tableWidget = exampleId.DataTable({
      select: true
    });
  }
}
