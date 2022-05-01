export interface IDepartmentIncidentReportAnalysis {
  title: string;
  count: number;
}

export class DepartmentIncidentReportAnalysis
  implements
  IDepartmentIncidentReportAnalysis {

  /* #region  Biến cục bộ */
  private _title: string;
  private _count: number;
  /* #endregion */

  /* #region  Thuộc tính */
  public get title(): string {
    return this._title;
  }

  public set title(s: string) {
    this._title = s;
  }

  public get count(): number {
    return this._count;
  }

  public set count(s: number) {
    this._count = s;
  }

  public get value(): IDepartmentIncidentReportAnalysis {
    return {
      title: this.title,
      count: this.count
    };
  }
  /* #endregion */

  /* #region  Hàm khởi tạo */
  public constructor(
    private set: IDepartmentIncidentReportAnalysis
  ) {
    /* #region  Khởi tạo giá trị mặc định */
    this._title = set.title;
    this._count = set.count;
    /* #endregion */
  }
  /* #endregion */

}
