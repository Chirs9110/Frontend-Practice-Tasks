import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent {
  megjelenites: string = "{{mintaSzoveg|lowercase}}, ez a pipe karakter amit szükséges használni: |"
  mintaSzoveg: string = "Szeretem az Angulart";
  mintaSzam: number = Math.PI;
  zsozsomegjelenites: string = "{{pénzösszeg|currency:'adott pénznem típusa'}}";
  zsozso: number = 100;
  datumMinta: string = 'mintaDatum:Date= new Date();';
  mintaDatum: Date = new Date();
}
