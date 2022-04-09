import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'healthino';
  
  desktop : boolean = false;
  
  
  appResized() {
    this.desktop = window.innerWidth >= 768 ? true : false
  }
  
  ngOnInit() {
    this.appResized()
    window.addEventListener('resize', this.appResized);
  }
  
}



