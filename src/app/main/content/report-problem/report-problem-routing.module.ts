import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateReportProblemComponent } from './create-report-problem/create-report-problem.component';
import { ReportProblemHistoryComponent } from './report-problem-history/report-problem-history.component';
import { ReportProblemComponent } from './report-problem.component';

const routes: Routes = [
  {
    path: '',
    component: ReportProblemComponent,
    children:[
      {
        path: '',
        component: ReportProblemHistoryComponent
      },
      {
        path: 'create',
        component: CreateReportProblemComponent
      },
      {
        path: ':id',
        loadChildren: () => import('./report-problem-detail/report-problem-detail.module').then(m => m.ReportProblemDetailModule)
      },

      {
        path: '**',
        redirectTo: ''
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportProblemRoutingModule { }
