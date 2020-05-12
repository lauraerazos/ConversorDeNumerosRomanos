import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NumerosRomanosComponent } from './numeros-romanos/numeros-romanos.component';



const routes: Routes = [
  { path: '', redirectTo: '/RomanNumerals', pathMatch: 'full' },
  {
    path: 'RomanNumerals',
    component: NumerosRomanosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
