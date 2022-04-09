import { CurrentDepartmentService } from './../../services/current-department.service';
import { CurrentPatientService } from './../../services/current-patient.service';
import { DepartmentsDataService } from './../../services/departments-data.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.sass']
})
export class PatientsComponent implements OnInit {

  departments : any
  patients : any
  patients_by_department : any
  allDepartments : number[] = []

  departmentToDisplay! : number[]
  patient! : number

  constructor(private current_department_service : CurrentDepartmentService,
    private current_patient_service : CurrentPatientService,
    private _departmentsDataService : DepartmentsDataService,
    private router : Router) { }

  ngOnInit(): void {
    this.departments = this._departmentsDataService.getDepartments()
    this.patients = this._departmentsDataService.getPatients()
    this.current_department_service.current_department.subscribe(department => this.departmentToDisplay = [department])
    this.current_patient_service.current_patient.subscribe(patient => this.patient = patient)
    
    if (this.departmentToDisplay.length == 1 && this.departmentToDisplay[0] == 0){
      this.patients.forEach((data:any,index:any) => {
        this.departmentToDisplay.push(data.departmentID)
      });
      this.departmentToDisplay = this.departmentToDisplay.filter((value, index, self) => self.indexOf(value) === index);
    }
  }

  choosePatient(patientAvailable:any){
    this.router.navigate(["details"])
    this.current_patient_service.changePatient(patientAvailable)
  }
}
