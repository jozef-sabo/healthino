import { AktualnyPacientService } from './../../aktualny-pacient.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-podrobnosti',
  templateUrl: './podrobnosti.component.html',
  styleUrls: ['./podrobnosti.component.sass']
})
export class PodrobnostiComponent implements OnInit {

  pacienti = ['Barbara Hicks','Shirley Randle','Patricia Taylor','Howard Zielinski','Luis Hernandez']
  pacient! : number;

  constructor(private aktualny_pacient_service : AktualnyPacientService) { }

  ngOnInit(): void {
  this.aktualny_pacient_service.aktualny_pacient.subscribe(pacient => this.pacient = pacient)
  }
}