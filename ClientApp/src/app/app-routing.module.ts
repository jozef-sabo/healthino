import { DetailsComponent } from './components/details/details.component';
import { PatientsComponent } from './components/patients/patients.component';
import { HistoryComponent } from './components/history/history.component';
import { DepartmentsComponent } from './components/departments/departments.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{
  path : "",
  component : DepartmentsComponent,
},
{
  path : "patients",
  component : PatientsComponent,
},
{
  path : "details",
  component : DetailsComponent,
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
