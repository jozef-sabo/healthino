import { CurrentPatientService } from './../../services/current-patient.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.sass']
})
export class DetailsComponent implements OnInit {

  patient! : any

  constructor(private current_patient_service : CurrentPatientService,
    private router : Router) { }

  desktop : boolean = false;

  ngOnInit(): void {
  this.current_patient_service.current_patient.subscribe(patient => this.patient = patient) 
  
  if (this.patient.id == undefined || 0){
    this.router.navigate([""])
  }
  
  
  if (window.screen.width >= 768) {
    this.desktop = true;
  }else{
    this.desktop = false;
  }

  }
}