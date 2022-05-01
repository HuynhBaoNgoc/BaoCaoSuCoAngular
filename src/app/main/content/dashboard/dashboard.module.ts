import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoughnutchartComponent } from './doughnutchart/doughnutchart.component';
import { LinechartComponent } from './linechart/linechart.component';
import { DashboardComponent } from './dashboard.component';
import { ChartsModule } from 'ng2-charts';
import { CategoryIncidentReportsComponent } from './category-incident-reports/category-incident-reports.component';
import { SatifiedPatientOfficersComponent } from './satified-patient-officers/satified-patient-officers.component';
import { SatifiedPatientComponent } from './satified-patient/satified-patient.component';



@NgModule({
  declarations: [
    LinechartComponent,
    DoughnutchartComponent,
    DashboardComponent,
    CategoryIncidentReportsComponent,
    SatifiedPatientOfficersComponent,
    SatifiedPatientComponent
  ],
  imports: [
    CommonModule,
    ChartsModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class DashboardModule { }
