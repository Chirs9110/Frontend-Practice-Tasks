import { Component } from '@angular/core';

@Component({
  selector: 'app-objektum',
  templateUrl: './objektum.component.html',
  styleUrls: ['./objektum.component.css']
})
export class ObjektumComponent {
   Dolgozok:Dolgozo[] = [
    {
      nev: "Koaxk Ábel",
      kor: 23,
      fizetes: 430000,
      beosztas: "Rendszergazda"
    },
    {
      nev: "Kovács Béla",
      kor: 35,
      fizetes: 500000,
      beosztas: "Fejlesztő"
    },
    {
      nev: "Nagy Eszter",
      kor: 28,
      fizetes: 380000,
      beosztas: "Projektmenedzser"
    },
    {
      nev: "Tóth Gábor",
      kor: 31,
      fizetes: 450000,
      beosztas: "Tesztelő"
    },
    {
      nev: "Kiss Márta",
      kor: 26,
      fizetes: 420000,
      beosztas: "Grafikus"
    },
    {
      nev: "Szabó Péter",
      kor: 29,
      fizetes: 390000,
      beosztas: "Adatbázis szakértő"
    },
    {
      nev: "Varga Anna",
      kor: 32,
      fizetes: 470000,
      beosztas: "Projektasszisztens"
    },
    {
      nev: "Horváth Gergő",
      kor: 27,
      fizetes: 400000,
      beosztas: "Rendszergazda"
    },
    {
      nev: "Kis János",
      kor: 33,
      fizetes: 480000,
      beosztas: "Fejlesztő"
    },
    {
      nev: "Takács Zsuzsa",
      kor: 30,
      fizetes: 410000,
      beosztas: "Tesztelő"
    },
    {
      nev: "Molnár Gábor",
      kor: 25,
      fizetes: 430000,
      beosztas: "Grafikus"
    },
    {
      nev: "Farkas Dávid",
      kor: 34,
      fizetes: 460000,
      beosztas: "Projektmenedzser"
    },
    {
      nev: "Kovácsné Éva",
      kor: 31,
      fizetes: 400000,
      beosztas: "Rendszergazda"
    },
    {
      nev: "Kissné Edit",
      kor: 28,
      fizetes: 420000,
      beosztas: "Adatbázis szakértő"
    },
    {
      nev: "Kis Bence",
      kor: 26,
      fizetes: 390000,
      beosztas: "Fejlesztő"
    },
    {
      nev: "Nagy Zoltán",
      kor: 32,
      fizetes: 440000,
      beosztas: "Projektasszisztens"
    },
    {
      nev: "Szabó Emese",
      kor: 27,
      fizetes: 410000,
      beosztas: "Tesztelő"
    },
    {
      nev: "Varga Gábor",
      kor: 29,
      fizetes: 430000,
      beosztas: "Grafikus"
    },
    {
      nev: "Nagy Anna",
      kor: 30,
      fizetes: 400000,
      beosztas: "Projektmenedzser"
    },
    {
      nev: "Kis Gergő",
      kor: 33,
      fizetes: 420000,
      beosztas: "Rendszergazda"
    },
    {
      nev: "Tóth Márta",
      kor: 35,
      fizetes: 450000,
      beosztas: "Adatbázis szakértő"
    },
    {
      nev: "Kovács Gábor",
      kor: 31,
      fizetes: 430000,
      beosztas: "Fejlesztő"
    },
    {
      nev: "Nagy Zsófia",
      kor: 26,
      fizetes: 410000,
      beosztas: "Tesztelő"
    },
    {
      nev: "Szabó János",
      kor: 28,
      fizetes: 440000,
      beosztas: "Grafikus"
    },
    {
      nev: "Varga Péter",
      kor: 34,
      fizetes: 420000,
      beosztas: "Projektmenedzser"
    },
    {
      nev: "Takács Orsolya",
      kor: 30,
      fizetes: 400000,
      beosztas: "Rendszergazda"
    },
    {
      nev: "Kis László",
      kor: 32,
      fizetes: 430000,
      beosztas: "Adatbázis szakértő"
    },
    {
      nev: "Nagy Dániel",
      kor: 27,
      fizetes: 410000,
      beosztas: "Fejlesztő"
    },
    {
      nev: "Kovácsné Zsuzsanna",
      kor: 29,
      fizetes: 430000,
      beosztas: "Tesztelő"
    },
    {
      nev: "Tóth Gergő",
      kor: 31,
      fizetes: 440000,
      beosztas: "Grafikus"
    },
    {
      nev: "Kiss Péter",
      kor: 28,
      fizetes: 420000,
      beosztas: "Projektmenedzser"
    }
  ];
  
}

export interface Dolgozo{
  nev:string;
  kor:number;
  fizetes:number;
  beosztas:string;
}