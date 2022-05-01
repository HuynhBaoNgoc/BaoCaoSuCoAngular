import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClassifyIncidentComponent } from './classify-incident.component';
import { IncidentCardComponent } from './incident-card/incident-card.component';

@NgModule({
  declarations: [
    ClassifyIncidentComponent,
    IncidentCardComponent,
  ],
  imports: [
    CommonModule,
  ]
})
export class ClassifyIncidentModule { }
