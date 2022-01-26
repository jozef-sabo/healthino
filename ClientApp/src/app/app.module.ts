import { OddeleniaComponent } from './components/oddelenia/oddelenia.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BottomNavigationComponent } from './components/bottom-navigation/bottom-navigation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { PacientiComponent } from './components/pacienti/pacienti.component';
import { PodrobnostiComponent } from './components/podrobnosti/podrobnosti.component';
import { HistoriaComponent } from './components/historia/historia.component';

@NgModule({
  declarations: [
    AppComponent,
    OddeleniaComponent,
    BottomNavigationComponent,
    PacientiComponent,
    PodrobnostiComponent,
    HistoriaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
