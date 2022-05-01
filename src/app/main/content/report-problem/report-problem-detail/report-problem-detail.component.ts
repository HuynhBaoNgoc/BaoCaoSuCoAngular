import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-report-problem-detail',
  templateUrl: './report-problem-detail.component.html',
  styleUrls: ['./report-problem-detail.component.scss']
})
export class ReportProblemDetailComponent implements OnInit {

  /* #region  Biến cục bộ */

  /* #endregion */

  /* #region  Thuộc tính */
  public get date(): Date {
    return new Date();
  }

  public get reportTitle():string{
    return "Tiêu đề báo cáo"
  }
  /* #endregion */

  /* #region  Hàm khởi tạo */
  constructor() { }
  /* #endregion */

  /* #region  Lifecycle */
  ngOnInit(): void {
  }
  /* #endregion */

  /* #region  Sự kiện */

  /* #endregion */


  
}
