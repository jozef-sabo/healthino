import { PatientsComponent } from './components/patients/patients.component';
import { HistoryComponent } from './components/history/history.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{
  path : "",
  loadChildren : () => import('./components/departments/departments.module').then(m => m.DepartmentsModule)
},
{
  path : "patients",
  loadChildren : () => import('./components/patients/patients.module').then(m => m.PatientsModule)
},
{
  path : "details",
  loadChildren : () => import('./components/details/details.module').then(m => m.DetailsModule)
},
{
  path : "history",
  component : HistoryComponent,
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
