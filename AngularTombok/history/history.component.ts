import { Component } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent {

  esemenyek = [
    "1776;Amerikai Függetlenségi Nyilatkozat elfogadása;Philadelphia, Amerikai Egyesült Államok;Az amerikai gyarmatok függetlenségi nyilatkozata",
    "1812;Oroszország elleni napóleoni háború kezdete;Orosz Birodalom;Napóleon inváziója",
    "1815;Waterloo-i csata;Waterloo, Belgium;Napóleon veresége",
    "1914;Az első világháború kitörése;Európa;Nagy háború kezdete",
    "1918;Az első világháború vége;Európa;A nagy háború befejeződése",
    "1939;Második világháború kezdete;Európa;A háború kitörése",
    "1941;Pearl Harbor támadása;Hawaii, Amerikai Egyesült Államok;Japán támadás az USA haditengerészetének bázisára",
    "1944;D-Day partraszállás;Normandia, Franciaország;Szövetséges invázió",
    "1945;Atombomba ledobása Hirosimára és Nagaszakira;Japán;Az atomtámadások a második világháborúban",
    "1953;Koreai háború befejeződése;Korea;Koreai háború vége",
    "1961;Berlini fal építése;Berlin, Német Demokratikus Köztársaság;Kelet-Nyugat német határzárása",
    "1963;Martin Luther King Jr. beszéde az „Álom”ról;Washington, Amerikai Egyesült Államok;Fontos beszéd az amerikai polgárjogi mozgalomról",
    "1969;Neil Armstrong első lépése a Holdon;Hold;Apollo-11 küldetés",
    "1986;Csernobili katasztrófa;Csernobyl, Ukrajna;Súlyos nukleáris baleset",
    "1989;Tiananmen téri mészárlás;Peking, Kína;Tiltakozás a kommunista rezsim ellen",
    "1991;Szovjetunió felbomlása;Moszkva, Oroszország;A Szovjetunió megszűnése",
    "1997;Hongkong visszacsatolása Kínához;Hongkong;A brit gyarmati uralom végének befejeződése",
    "2005;Hurrikán Katrina;Amerikai Egyesült Államok;Rendkívül pusztító hurrikán",
    "2008;Pekingi olimpia;Peking, Kína;Olimpiai játékok megrendezése",
    "2011;Osama bin Laden halála;Abbottabad, Pakisztán;Az al-Kaida vezetőjének likvidálása",
    "2013;Szíriai polgárháború kezdete;Szíria;Polgárháború kitörése",
    "2020;COVID-19 világjárvány kezdete;Különböző országok;Az új koronavírus világjárványának kitörése",
    "2021;Joe Biden beiktatása;Washington, Amerikai Egyesült Államok;Az Amerikai Egyesült Államok elnökének beiktatása",
    "2021;Megszállják Afganisztánt a tálibok;Kabul, Afganisztán;Tálib hatalomátvétel",
    "2022;Katrina Rigney elnyeri az első ChatGPT Oscar-díjat;OpenAI székhelye;Az első ChatGPT Oscar-díj átadása"
  ];
  objektumFeltoltes(feltoltendoElem:string[]):Tortenelem[]{
    var uresTomb:Tortenelem[]=[];
    for(let i:number=0; i<feltoltendoElem.length; i++){
      let elemDarabok:string[]=feltoltendoElem[i].split(';');
      var objektum:Tortenelem={
        evszam:Number(elemDarabok[0]),
        esemeny:String(elemDarabok[1]),
        helyszin:String(elemDarabok[2]),
        kovetkezmeny:String(elemDarabok[3]),
      }
      uresTomb.push(objektum)
    }
    return uresTomb
  }
  megjelenites:Tortenelem[]=this.objektumFeltoltes(this.esemenyek);

  // parosEvek(esemenyek:any[]):number[]{
  //   let parosak:number[]=[];
  //   for(let i:number=0; i<esemenyek.length; i++){
  //     if(esemenyek[i].evszam%2==0){      // HIBA:if(parosak[i]%2==0){ helyett: -->  if(esemenyek[i].evszam%2==0){ mert objektuman keresünk!
  //       parosak.push(esemenyek[i])
  //     }
  //   }
  //   return parosak
  // }
  // kivalogatas:number[]=this.parosEvek(this.esemenyek);
}
export interface Tortenelem{
evszam:number;
esemeny:string;
helyszin:string;
kovetkezmeny:string;
}


