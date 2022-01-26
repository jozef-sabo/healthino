import { AktualneOddelenieService } from './../../aktualne-oddelenie.service';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';


@Component({
  selector: 'app-oddelenia',
  templateUrl: './oddelenia.component.html',
  styleUrls: ['./oddelenia.component.sass']
})
export class OddeleniaComponent implements OnInit {

  oddelenia = ["Oddelenie č.1","Oddelenie č.2"]
  oddelenie! : number;

  constructor(private aktualne_oddelenie_service : AktualneOddelenieService, private router : Router) { }

  ngOnInit(): void {
    this.aktualne_oddelenie_service.aktualne_oddelenie.subscribe(oddelenie => this.oddelenie = oddelenie)
  }

  istNaOddelenie(oddelenieNaVyber:string){
    this.router.navigate(['pacienti'])
    let oddelenieID = this.oddelenia.indexOf(oddelenieNaVyber)
    this.aktualne_oddelenie_service.zmenitOddelenie(oddelenieID)
  }
}
