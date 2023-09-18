import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { BsComponent } from './bs/bs.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { HibaComponent } from './hiba/hiba.component';
import { TombComponent } from './tomb/tomb.component';
import { ObjektumComponent } from './objektum/objektum.component';
import { OpenAiObjektumComponent } from './open-ai-objektum/open-ai-objektum.component';
import { PipesComponent } from './pipes/pipes.component';
import { EuListaComponent } from './eu-lista/eu-lista.component';
import { EredmenyekTombComponent } from './eredmenyek-tomb/eredmenyek-tomb.component';
import { F1Component } from './f1/f1.component';
import { SnookerComponent } from './snooker/snooker.component';
import { HistoryComponent } from './history/history.component';

@NgModule({
  declarations: [
    AppComponent,
    BsComponent,
    DataBindingComponent,
    HibaComponent,
    TombComponent,
    ObjektumComponent,
    OpenAiObjektumComponent,
    PipesComponent,
    EuListaComponent,
    EredmenyekTombComponent,
    F1Component,
    SnookerComponent,
    HistoryComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
