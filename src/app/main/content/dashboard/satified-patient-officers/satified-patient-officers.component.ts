import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { Label, MultiDataSet } from 'ng2-charts';
import { PatientType } from 'projects/data/src/public-api';

@Component({
  selector: 'fpt-satified-patient-officers',
  templateUrl: './satified-patient-officers.component.html',
  styleUrls: [
    './satified-patient-officers.component.scss',
    '../charts.component.scss'
  ]
})
export class SatifiedPatientOfficersComponent implements OnInit {

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
  public doughnutChartLabels: Label[] = ["Rất tốt", "Tốt", "Khá", "Trung bình", "Kém"];
  public doughnutChartData: MultiDataSet = [
    [40, 20, 10, 10, 20]
  ];
  public doughnutChartType: ChartType = 'doughnut';
  /* #endregion */

  /* #region  Hàm khởi tạo */
  constructor() {
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
