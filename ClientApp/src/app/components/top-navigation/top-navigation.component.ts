import { Router, NavigationEnd } from '@angular/router';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-top-navigation',
  templateUrl: './top-navigation.component.html',
  styleUrls: ['./top-navigation.component.sass'],
  encapsulation: ViewEncapsulation.None
})
export class TopNavigationComponent implements OnInit {

  currentPage : string = "/"

  constructor(private router : Router) {
    router.events.subscribe( event => {
      if(event instanceof NavigationEnd){
        this.currentPage = this.router.url;
      }
    })
   }

  ngOnInit(): void {
  }

}
