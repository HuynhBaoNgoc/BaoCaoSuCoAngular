import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassifyIncidentComponent } from './classify-incident/classify-incident.component';
import { IncidentReportComponent } from './incident-report.component';


const routes: Routes = [
  {
    path: '',
    component: IncidentReportComponent,
    children:[
      {
        path: 'classify',
        component: ClassifyIncidentComponent,
        loadChildren: () => import('./classify-incident/classify-incident.module').then(m => m.ClassifyIncidentModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IncidentReportRoutingModule { }
