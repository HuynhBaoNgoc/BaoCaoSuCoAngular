import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { PatientType } from 'projects/data/src/public-api';

@Component({
  selector: 'fpt-satified-patient',
  templateUrl: './satified-patient.component.html',
  styleUrls: [
    './satified-patient.component.scss',
    '../charts.component.scss'
  ]
})
export class SatifiedPatientComponent implements OnInit {

  /* #region  Const */
  public get INPATIENT(): PatientType {
    return PatientType.InPatient;
  }
  public get OUTPATIENT(): PatientType {
    return PatientType.OutPatient;
  }
  /* #endregion */

  /* #region  Biến cục bộ */
  private _patientType: PatientType;
  /* #endregion */

  /* #region  Thuộc tính */
  public get patientType(): PatientType {
    return this._patientType;
  }

  public set patientType(s: PatientType) {
    this._patientType = s;
  }

  public lineChartData: ChartDataSets[] = [
              {
                data: [ 3.9, 4.3, 4.35, 4.34, 4.45, 4.5, 4.7],
                label: 'Điểm hài lòng chung',
                fill: false,
                lineTension: 0.1
              },
              {
                data: [ 4.25, 4.25, 4.42, 4.42, 4.42, 4.55, 4.62],
                label: 'Cơ sở vật chất',
                fill: false,
                lineTension: 0.1
              },
              {
                data: [ 4.05, 4.1, 4.1, 4.1, 4.15, 4.38, 4.48],
                label: 'Khả năng tiếp cận ',
                fill: false,
                lineTension: 0.1
              },
              {
                data: [ 4.08, 4.18, 4.18, 4.18, 4.3, 4.33, 4.35],
                label: 'Thái độ, năng lực',
                fill: false,
                lineTension: 0.1
              },
              {
                data: [ 4.48, 4.48, 4.59, 4.62, 4.64, 4.64, 4.75],
                label: 'Thông tin minh bạch',
                fill: false,
                lineTension: 0.1
              },
              {
                data: [ 4.3, 4.41, 4.41, 4.41, 4.55, 4.58,4.61],
                label: 'Kết quả cung cấp dịch vụ',
                fill: false,
                lineTension: 0.1
              }
  ];
  public lineChartLabels: Label[] = ["1/4", "2/4", "3/4", "4/4", "5/4", "6/4","7/4"];
  public lineChartOptions: ChartOptions = {
    responsive: true,
  };
  public lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,0,0,0.3)',
    },
  ];
  public lineChartLegend = true;
  public lineChartType: ChartType = 'line';
  public lineChartPlugins = [];
  /* #endregion */

  /* #region Hàm khởi tạo */
  public constructor(
    private cd: ChangeDetectorRef
  ) {
    this._patientType = PatientType.InPatient;
  }
  /* #endregion */

  /* #region  Lifecycle */
  public ngOnInit(): void {
  }
  /* #endregion */

  /* #region  Xử lý sự kiện */
  public onPatientTypeClick(type: PatientType): void {
    this.patientType = type;
  }
  /* #endregion */

}
