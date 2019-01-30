import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.scss']
})
export class PiechartComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  getPieChart(idname) {
    return new Chart(idname, {
      type: 'pie',
      data: {
        datasets: [
          {label: '% Present',
              fill: true,
              backgroundColor: [
                  'blue',
                  'grey'],
              data: [30, 70],
  // Notice the borderColor 
              borderColor:['blue', 'grey'],
              borderWidth: [1,1]
          }
      ]
      },
      options: {
        title: {
          display: true,
          position: 'top'
          },
          rotation: -0.7 * Math.PI
      }
    });
  }

}
