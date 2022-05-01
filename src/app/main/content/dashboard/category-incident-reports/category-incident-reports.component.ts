import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'fpt-category-incident-reports',
  templateUrl: './category-incident-reports.component.html',
  styleUrls: ['./category-incident-reports.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoryIncidentReportsComponent implements OnInit, AfterViewInit {

  /* #region  Biến  cục bộ */
  private _data: number[] = [];
  /* #endregion */

  /* #region  Thuộc tính */
  public get data(): number[] {
    return this._data;
  }

  public set data(s: number[]) {
    this._data = s;
    this.cd.markForCheck();
  }

  public barChartOptions: ChartOptions = {
    responsive: true,
    defaultColor: 'red',
    scales: {
      yAxes: [{
        gridLines: {
          display: false
        }
      }]
    }
  };
  public barChartLabels: Label[] = [
    'Nhiễm khuẩn bệnh viện',
    'Cơ sở vật chất, hạ tầng',
    'Tai nạn chấn thương, té nghã',
    'Xét nghiệm, giải phẩu, di truyền',
    'Quy trình, thủ tục khám chữa bệnh',
    'Nhiễm khuẩn bệnh viện',
    'Cơ sở vật chất, hạ tầng',
    'Tai nạn chấn thương, té nghã',
    'Xét nghiệm, giải phẩu, di truyền',
    'Quy trình, thủ tục khám chữa bệnh'
  ];
  public barChartType: ChartType = 'horizontalBar';
  public barChartLegend = false;
  public barChartPlugins = [];

  public barChartData: ChartDataSets[] = [
    {
      hoverBorderWidth: 0,
      borderWidth: 0,
      pointHoverBorderWidth: 0,
      pointBorderWidth: 0,
      backgroundColor: '#116fb3',
      hoverBackgroundColor: '#116fb3'
    }
  ];
  /* #endregion */

  /* #region  Hàm khởi tạo */
  constructor(
    private cd: ChangeDetectorRef
  ) { }
  /* #endregion */

  /* #region  Lifecycle */
  public ngOnInit(): void {

  }

  public ngAfterViewInit(): void {
    setTimeout(() => {
      this.data = [
        53,
        42,
        81,
        122,
        105,
        189,
        211,
        202,
        225,
        275
      ];
    }, 2000);
  }
  /* #endregion */
}
