import { Component } from '@angular/core';

@Component({
  selector: 'app-vizsgafeladat',
  templateUrl: './vizsgafeladat.component.html',
  styleUrls: ['./vizsgafeladat.component.css']
})
export class VizsgafeladatComponent {

  suly:number=1;
  magassag:number=1;
  eredmenyek:string[]=[];

  Eredmenymentes():void{
    const bmi = (this.suly / (this.magassag * this.magassag)).toFixed();
    this.eredmenyek.push(`A BMI a ${this.suly}kg súlyú és ${this.magassag} m magassaágú személy esetén a BMI: ${bmi}`);
  }
  
}
