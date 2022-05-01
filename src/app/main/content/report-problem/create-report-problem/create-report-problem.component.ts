import { Component, OnInit, AfterViewInit } from '@angular/core';

declare function trigger(): any;

@Component({
  selector: 'app-create-report-problem',
  templateUrl: './create-report-problem.component.html',
  styleUrls: ['./create-report-problem.component.scss'],

})
export class CreateReportProblemComponent implements OnInit, AfterViewInit {



  constructor() { }

  ngOnInit(): void {



  }

  public ngAfterViewInit(): void {
    trigger();
  }

}
