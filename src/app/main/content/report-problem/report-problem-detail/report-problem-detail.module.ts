import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportProblemDetailRoutingModule } from './report-problem-detail-routing.module';
import { ReportProblemDetailComponent } from './report-problem-detail.component';
import { ReportProblemDetailInfoComponent } from './report-problem-detail-info/report-problem-detail-info.component';
import { ReportProblemDetailDiscussionComponent } from './report-problem-detail-discussion/report-problem-detail-discussion.component';


@NgModule({
  declarations: [
    ReportProblemDetailComponent,
    ReportProblemDetailInfoComponent,
    ReportProblemDetailDiscussionComponent

  ],
  imports: [
    CommonModule,
    ReportProblemDetailRoutingModule
  ]
})
export class ReportProblemDetailModule { }
