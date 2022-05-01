import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'fpt-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
