import { Component } from '@angular/core';
import { versenyEredmeny } from '../eredmenyek-tomb/eredmenyek-tomb.component';

@Component({
  selector: 'app-f1',
  templateUrl: './f1.component.html',
  styleUrls: ['./f1.component.css']
})
export class F1Component {
  //nev, osszpont, elsoHelyezesekSzama, polePosition

  pilotaAdat:string[] = [
    "Max Verstappen;454;15;8",
    "Charles Leclerc;308;3;8",
    "Sergio Perez;305;2;0",
    "George Russell;275;1;2",
    "Carlos Sainz Jr;246;1;3",
    "Lewis Hamilton;240;0;0",
    "Lando Norris;122;0;0",
    "Esteban Ocon;92;0;0",
    "Fernando Alonso;81;0;0",
    "Valtteri Bottas;49;0;0",
    "Daniel Ricciardo;37;0;0",
    "Sebastian Vettel;37;0;0",
    "Kevin Magnussen;25;0;0",
    "Pierre Gasly;23;0;0",
    "Lance Stroll;18;0;0",
    "Mick Schumacher;12;0;1",
    "Yuki Tsunoda;12;0;0",
    "Guanyu Zhou;6;0;0",
    "Alexander Albon;4;0;0",
    "Nyck de Vries;2;0;0",
    "Nicholas Latifi;2;0;0"
  
  ];
  objektumFeltolto(feltoltendoElem: string[]): adatok[] {
    var beolvasottAdatok: adatok[] = [];
    for (let i: number = 0; i < feltoltendoElem.length; i++) {
      let elemDarabok: string[] = feltoltendoElem[i].split(';');
      let objektum: adatok = {
        nev: String(elemDarabok[0]),
        osszpont: Number(elemDarabok[1]),
        elsoHelyezesekSzama: Number(elemDarabok[2]),
        polePosition: Number(elemDarabok[3]),
      }
      beolvasottAdatok.push(objektum)
    }
    return beolvasottAdatok

  }
  megjelenitettAdatok:  adatok[] = this.objektumFeltolto(this. pilotaAdat);

}
export interface adatok {
  nev: string;
  osszpont: number;
  elsoHelyezesekSzama: number;
  polePosition: number;

}