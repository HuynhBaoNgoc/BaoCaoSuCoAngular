import { ClassificationOfInjuryComponent } from './classification-of-injury/classification-of-injury.component';
import { DirectorySystemComponent } from './directory-system.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {
    path: '',
    component: DirectorySystemComponent,
    children:[
      {
        path: ':id',
        component:ClassificationOfInjuryComponent,
      },

      {
        path: '**',
        redirectTo: '1'
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DirectorySystemRoutingModule { }
