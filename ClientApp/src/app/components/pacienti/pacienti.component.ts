import { Router } from '@angular/router';
import { AktualnyPacientService } from './../../aktualny-pacient.service';
import { AktualneOddelenieService } from './../../aktualne-oddelenie.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pacienti',
  templateUrl: './pacienti.component.html',
  styleUrls: ['./pacienti.component.sass']
})
export class PacientiComponent implements OnInit {

  oddelenia = ["Oddelenie č.1","Oddelenie č.2"]
  pacienti = ['Barbara Hicks','Shirley Randle','Patricia Taylor','Howard Zielinski','Luis Hernandez']
  oddelenia_pacienti = [['Barbara Hicks','Shirley Randle','Howard Zielinski'],['Patricia Taylor','Luis Hernandez']]

  oddelenie! : number;
  pacient! : number;

  constructor(private aktualne_oddelenie_service : AktualneOddelenieService, private aktualny_pacient_service : AktualnyPacientService,private router : Router) { }

  ngOnInit(): void {
  this.aktualne_oddelenie_service.aktualne_oddelenie.subscribe(oddelenie => this.oddelenie = oddelenie)
  this.aktualny_pacient_service.aktualny_pacient.subscribe(pacient => this.pacient = pacient)
  }

  istNaPacienta(pacientNaVyber:string){
    this.router.navigate(["podrobnosti"])
    let pacientID = this.pacienti.indexOf(pacientNaVyber)
    this.aktualny_pacient_service.zmenitPacienta(pacientID)
  }
}
