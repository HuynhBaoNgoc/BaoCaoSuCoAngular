import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReportProblemDetailDiscussionComponent } from './report-problem-detail-discussion/report-problem-detail-discussion.component';
import { ReportProblemDetailInfoComponent } from './report-problem-detail-info/report-problem-detail-info.component';
import { ReportProblemDetailComponent } from './report-problem-detail.component';

const routes: Routes = [
  {
    path: '',
    component: ReportProblemDetailComponent,
    children: [
      {
        path: 'info',
        component: ReportProblemDetailInfoComponent
      },
      {
        path: 'discussion',
        component: ReportProblemDetailDiscussionComponent
      },
      {
        path: '**',
        redirectTo: 'info'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportProblemDetailRoutingModule { }
