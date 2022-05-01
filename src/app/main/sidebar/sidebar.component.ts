import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'fpt-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  //#region Xử lý sự kiện
  //#endregion

}
