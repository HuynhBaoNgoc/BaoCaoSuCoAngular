import { DirectorySystemRoutingModule } from './directory-system-routing.module';
import { ClassificationOfInjuryComponent } from './classification-of-injury/classification-of-injury.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectorySystemComponent } from './directory-system.component';



@NgModule({
  declarations: [
    DirectorySystemComponent,
    ClassificationOfInjuryComponent
  ],
  imports: [
    CommonModule,
    DirectorySystemRoutingModule
  ]
})
export class DirectorySystemModule { }
