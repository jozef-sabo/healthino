import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'healthino';
  
  desktop : boolean = false;

  ngOnInit() {
    if (window.screen.width >= 768) {
      this.desktop = true;
    }else{
      this.desktop = false;
    }
  }
}
