import { element } from 'protractor';
import { Component, OnInit } from '@angular/core';
import * as Chart from 'chart.js';

@Component({
  selector: 'app-doughnutchart',
  templateUrl: './doughnutchart.component.html',
  styleUrls: ['./doughnutchart.component.scss']
})
export class DoughnutchartComponent implements OnInit {
  public chart: any = null;

  ngOnInit(): void {
    // this.chart = new Chart("canvas", {
    //   type: 'doughnut',
    //   data: {
    //     labels: ["Rất tốt", "Tốt", "Khá", "Trung bình", "Kém"],
    //     datasets: [{
    //       data: [40, 20, 10, 10, 20],
    //       backgroundColor: [
    //         'red',
    //         'blue',
    //         'green',
    //         'orange',
    //         'yellow',

    //       ],
    //       // pointHitRadius: 1.0
    //     }]
    //   },
    //   options: {
    //     elements: {

    //     }
    //   }

    // });

  }//end Oninit

}
