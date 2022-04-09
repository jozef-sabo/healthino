import { MaterialModule } from './../../material/material.module';
import { PatientsComponent } from './patients.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientsRoutingModule } from './patients-routing.module';


@NgModule({
  declarations: [PatientsComponent],
  imports: [
    CommonModule,
    PatientsRoutingModule,
    MaterialModule
  ]
})
export class PatientsModule { }
