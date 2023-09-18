import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {
  vizsgaltSzam!: number;

  PrimE(vizsgaltSzam: number): boolean {
    let osztok: number = 0;
    for (let i: number = 1; i < vizsgaltSzam; i++)
      if (vizsgaltSzam % i == 0) {
        osztok++
      }

    if (osztok == 2) {
      return true;
    }
    else {
      return false
    }
  }


  //Eredmény kiiratás
  eredmenyKiiro(): string {
    if (this.PrimE(this.vizsgaltSzam)) {
      return "prím";
    }
    else {
      return "";
    }
  }
  eredmeny: string = this.eredmenyKiiro();

  eredmenyMentve: boolean = false; // flag változó az eredmény elmentésének állapotához

  EredmenyMentes() {
    if (this.PrimE(this.vizsgaltSzam)) {
      this.megoldasok.push(`${this.vizsgaltSzam} prímszám`);
    } else {
      this.megoldasok.push(`${this.vizsgaltSzam} NEM prímszám`);
    }
    this.eredmenyMentve = true; // beállítjuk a flag változót true-ra
  }
  megoldasok: string[] = [];
}


