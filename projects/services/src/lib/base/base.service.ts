import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
/**
 * Created date: 18042021
 * Created user: ThuDT32
 */
export class BaseService {

  /* #region  Biến cục bộ */
  private _header: HttpHeaders | null = null;
  /* #endregion */

  /* #region  Thuộc tính */

  /* #endregion */

  /* #region  Hàm khởi tạo */
  /**
   * Hàm khởi tạo
   * @param httpClient Khởi tạo HttpClient theo DI
   */
  constructor(
    private httpClient: HttpClient
  ) {
    this.initiate();
  }
  /* #endregion */

  /* #region  Xử lý */
  /* #region  Hàm public */

  /* #endregion */

  /* #region  Hàm private */
  private initiate(): void {
    this._header = null;
  }
  /* #endregion */
  /* #endregion */
}
