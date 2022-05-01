import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClassifyIncidentComponent } from './classify-incident/classify-incident.component';
import { IncidentReportComponent } from './incident-report.component';
import { IncidentReportRoutingModule } from './incident-report-routing.module';
import { ModalDialogComponent } from './modal/modal-filter/modal-filter.component';
import { ModalOthersIncidentComponent } from './modal/modal-others-incident/modal-others-incident.component';
import { ModalOthersReasonComponent } from './modal/modal-others-reason/modal-others-reason.component';

@NgModule({
  declarations: [
    IncidentReportComponent,
    ModalOthersIncidentComponent,
    ModalOthersReasonComponent,
  ],
  imports: [
    CommonModule,
    IncidentReportRoutingModule
  ],
  entryComponents: [
    ModalDialogComponent
  ]
})
export class IncidentReportModule { }
