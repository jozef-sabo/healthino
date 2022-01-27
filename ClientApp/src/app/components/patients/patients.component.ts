import { Router } from '@angular/router';
import { CurrentPatientService } from '../../current-patient.service';
import { CurrentDepartmentService } from '../../current-department.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.sass']
})
export class PatientsComponent implements OnInit {

  departments = ["Oddelenie č.1","Oddelenie č.2"]
  patients = ['Barbara Hicks','Shirley Randle','Patricia Taylor','Howard Zielinski','Luis Hernandez']
  patients_by_department = [['Barbara Hicks','Shirley Randle','Howard Zielinski'],['Patricia Taylor','Luis Hernandez']]

  department! : number;
  patient! : number;

  constructor(private current_department_service : CurrentDepartmentService, private current_patient_service : CurrentPatientService,private router : Router) { }

  ngOnInit(): void {
  this.current_department_service.current_department.subscribe(department => this.department = department)
  this.current_patient_service.current_patient.subscribe(patient => this.patient = patient)
  }

  choosePatient(patientsAvailable:string){
    this.router.navigate(["details"])
    let patientID = this.patients.indexOf(patientsAvailable)
    this.current_patient_service.changePatient(patientID)
  }
}
