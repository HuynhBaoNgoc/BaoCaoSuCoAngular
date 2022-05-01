import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './content.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: ContentComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./report-problem/report-problem.module').then(m => m.ReportProblemModule)
      },
      {
        path: 'directory',
        loadChildren: () => import('./directory-system/directory-system.module').then(m => m.DirectorySystemModule)
      },
      {
        path: 'report',
        loadChildren: () => import('./report-problem/report-problem.module').then(m => m.ReportProblemModule)
      },
      {
        path: 'incident-report',
        loadChildren: () => import('./incident-report/incident-report.module').then(m => m.IncidentReportModule)
      },
      {
        path: '**',
        redirectTo: 'dashboard'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContentRoutingModule { }
