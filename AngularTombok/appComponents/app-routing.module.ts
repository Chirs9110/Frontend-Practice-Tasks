import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BsComponent } from './bs/bs.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { HibaComponent } from './hiba/hiba.component';
import { ObjektumComponent } from './objektum/objektum.component';
import { TombComponent } from './tomb/tomb.component';
import { OpenAiObjektumComponent } from './open-ai-objektum/open-ai-objektum.component';
import { PipesComponent } from './pipes/pipes.component';
import { EuListaComponent } from './eu-lista/eu-lista.component';
import { EredmenyekTombComponent } from './eredmenyek-tomb/eredmenyek-tomb.component';
import { F1Component } from './f1/f1.component';
import { SnookerComponent } from './snooker/snooker.component';
import { HistoryComponent } from './history/history.component';

const routes: Routes = [
  { path: "bootstrap", component: BsComponent },
  { path: '', redirectTo: "history", pathMatch: "full" },
  { path: 'dataB', component: DataBindingComponent },
  { path: 'tomb', component: TombComponent },
  { path: 'objektum', component: ObjektumComponent },
  { path: 'objektumAi', component: OpenAiObjektumComponent },
  { path: 'pipes', component: PipesComponent },
  { path: 'Eu', component: EuListaComponent },
  { path: 'Er', component: EredmenyekTombComponent },
  {path: 'Forma1',component:F1Component},
  {path:'snooki', component:SnookerComponent},
  {path:'history', component:HistoryComponent},
  { path: '**', component: HibaComponent } //ezt rakd utoljára!

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
