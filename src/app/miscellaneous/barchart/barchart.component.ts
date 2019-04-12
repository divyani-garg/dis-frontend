import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.scss']
})
export class BarchartComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  getBarChart(idname, labelValues, dataValues, chartFunction) {

    const backColor = [];
    for (let i = 0; i < dataValues.length; i++) {
      if(dataValues[i] >= 75) {
          backColor.push('green');
      } else if (dataValues[i] < 60) {
          backColor.push('red');
      } else {
        backColor.push('#ffcc00');
      }
    }

    return new Chart(idname, {
      type: 'bar',
      data: {
        labels: labelValues,
        datasets: [{
          label: '% present',
          data: dataValues,
          backgroundColor: backColor,
        borderColor: backColor,
        borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        onClick: chartFunction,
        title: {
          text: 'Attendance till current date',
          display: true
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true,
              stepSize: 10,
              max: 100,
              font: 'bold',
              autoSkip: false
            }
          }],
          xAxes: [{
            ticks: {
              autoSkip: false
            }
          }]
        }
      }
    });
  }

}
