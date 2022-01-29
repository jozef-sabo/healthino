import { Component, OnInit } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-bottom-navigation',
  templateUrl: './bottom-navigation.component.html',
  styleUrls: ['./bottom-navigation.component.sass']
})
export class BottomNavigationComponent implements OnInit {

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
