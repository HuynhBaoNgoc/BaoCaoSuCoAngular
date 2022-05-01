import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-linechart',
  templateUrl: './linechart.component.html',
  styleUrls: ['./linechart.component.scss']
})
export class LinechartComponent implements OnInit {
  public myChart: any = null;
  // public lineChartData: Chart.ChartDataSets[] =
  //   [
  //     { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
  //     { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' },
  //     { data: [180, 480, 770, 90, 1000, 270, 400], label: 'Series C' }
  //   ];

  constructor() { }

  ngOnInit(): void {
    // this.myChart = new Chart("canvass", {
    //   type: 'line',
    //   data: {
    //       labels: [ "1/4", "2/4", "3/4", "4/4", "5/4", "6/4","7/4"],
    //       datasets: [
    //         {
    //           data: [ 3.9, 4.3, 4.35, 4.34, 4.45, 4.5, 4.7],
    //           label: 'Điểm hài lòng chung',
    //           borderColor: 'blue',
    //           // backgroundColor: 'white',
    //           fill: false,
    //           lineTension: 0.1
    //         },
    //         {
    //           data: [ 4.25, 4.25, 4.42, 4.42, 4.42, 4.55, 4.62],
    //           label: 'Cơ sở vật chất',
    //           fill: false,
    //           borderColor: 'orange',
    //           // backgroundColor: 'white',
    //           lineTension: 0.1
    //         },
    //         {
    //           data: [ 4.05, 4.1, 4.1, 4.1, 4.15, 4.38, 4.48],
    //           label: 'Khả năng tiếp cận ',
    //           fill: false,
    //           borderColor: 'red',
    //           // backgroundColor: 'white',
    //           lineTension: 0.1
    //         },
    //         {
    //           data: [ 4.08, 4.18, 4.18, 4.18, 4.3, 4.33, 4.35],
    //           label: 'Thái độ, năng lực',
    //           fill: false,
    //           borderColor: 'green',
    //           // backgroundColor: 'white',
    //           lineTension: 0.1
    //         },
    //         {
    //           data: [ 4.48, 4.48, 4.59, 4.62, 4.64, 4.64, 4.75],
    //           label: 'Thông tin minh bạch',
    //           fill: false,
    //           borderColor: 'pink',
    //           // backgroundColor: 'white',
    //           lineTension: 0.1
    //         },
    //         {
    //           data: [ 4.3, 4.41, 4.41, 4.41, 4.55, 4.58,4.61],
    //           label: 'Kết quả cung cấp dịch vụ',
    //           fill: false,
    //           borderColor: 'yellow',
    //           // backgroundColor: 'white',
    //           lineTension: 0.1
    //         }
    //       ]
    //   },
    //   options: {

    //   }
    // });

  }

}
