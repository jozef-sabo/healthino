import { PodrobnostiComponent } from './components/podrobnosti/podrobnosti.component';
import { PacientiComponent } from './components/pacienti/pacienti.component';
import { HistoriaComponent } from './components/historia/historia.component';
import { OddeleniaComponent } from './components/oddelenia/oddelenia.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{
  path : "",
  component : OddeleniaComponent,
},
{
  path : "pacienti",
  component : PacientiComponent,
},
{
  path : "podrobnosti",
  component : PodrobnostiComponent,
},
{
  path : "historia",
  component : HistoriaComponent,
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
