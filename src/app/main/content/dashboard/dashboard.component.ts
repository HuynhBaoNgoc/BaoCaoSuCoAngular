import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';



@Component({
  selector: 'fpt-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent implements OnInit {

  /* #region  Biến cục bộ */
  /* #endregion */

  /* #region  Thuộc tính */

  /* #endregion */

  constructor() { }

  ngOnInit(): void {

  }
}
