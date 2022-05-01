import { IncidentReportStatusDirective, WaittingTimeCl } from './../../../../../projects/directives/src/lib/incident-report-status.directive';

import { ReportProblemHistoryComponent } from './report-problem-history/report-problem-history.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportProblemRoutingModule } from './report-problem-routing.module';
import { ReportProblemComponent } from './report-problem.component';
import { DialogRequireComponent } from './report-problem-detail-dialog/dialog-require/dialog.component';
import { DialogVolunteerComponent } from './report-problem-detail-dialog/dialog-volunteer/dialog.component';
import { CreateReportProblemComponent } from './create-report-problem/create-report-problem.component';
//import { NgSelect2Module } from 'ng-select2';

//import { NgSelect2Module } from 'ng-select2';



@NgModule({
  declarations: [
    ReportProblemComponent,
    ReportProblemHistoryComponent,
    DialogRequireComponent,
    DialogVolunteerComponent,
    CreateReportProblemComponent,
    IncidentReportStatusDirective,
    WaittingTimeCl
  ],
  imports: [
    CommonModule,
    ReportProblemRoutingModule,
  ],
  entryComponents: [
    DialogRequireComponent,
    DialogVolunteerComponent
  ]
})
export class ReportProblemModule { }
