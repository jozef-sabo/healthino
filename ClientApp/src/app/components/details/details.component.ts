import { CurrentPatientService } from '../../current-patient.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.sass']
})
export class DetailsComponent implements OnInit {

  patients = ['Barbara Hicks','Shirley Randle','Patricia Taylor','Howard Zielinski','Luis Hernandez']
  patient! : number;

  constructor(private current_patient_service : CurrentPatientService) { }

  desktop : boolean = false;

  ngOnInit(): void {
  this.current_patient_service.current_patient.subscribe(patient => this.patient = patient) 
  
  if (window.screen.width >= 768) {
    this.desktop = true;
  }else{
    this.desktop = false;
  }

  }
}