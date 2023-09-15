document.body.innerHTML+="<h2>Random generált tömb: </h2>"
function tombFeltolto(meret:number, felsoHatar:number, alsoHatar:number):number[]{
  let randomTomb:number[]=[];
  for(let i:number=0;i<meret;i++){
    randomTomb.push(Math.round(Math.random()*(felsoHatar-alsoHatar))+alsoHatar)
  }
return randomTomb 
}
var randomTomb:number[]=tombFeltolto(10,20,100)
document.body.innerHTML+=randomTomb.join(' ')

document.body.innerHTML+="<h2>Összegzés tétele</h2>"
function osszegzesTetel(randomTomb:number[]):number{
  let osszeg:number=0;
  for(let i:number=0;i<randomTomb.length;i++){
  osszeg+=randomTomb[i]
}
return osszeg
}

var osszegzes:number=osszegzesTetel(randomTomb)
document.body.innerHTML+="A tömb összege: "+osszegzes;

document.body.innerHTML+="<h2>Átlagszámítás tétele</h2>"

function atlagTetel(randomTomb:number[]):number{
  let osszeg:number=0;
  for(let i:number=0;i<randomTomb.length;i++){
  osszeg+=randomTomb[i]
}
let atlagSzamitas:number=osszeg/randomTomb.length
return atlagSzamitas
}
var atlag:number=atlagTetel(randomTomb)
document.body.innerHTML+="A tömb átlaga: "+atlag.toFixed();

document.body.innerHTML+="<h2>Megszámlálás tétele</h2>"
function megSzamlalasTetel(randomTomb:number[]):number{
  let parosSzamok:number=0;
  for(let i:number=0;i<randomTomb.length;i++){
    if(randomTomb[i]%2==0){
      parosSzamok++
    }
  }
  return parosSzamok
}

var megSzamlalas:number=megSzamlalasTetel(randomTomb)
document.body.innerHTML+=megSzamlalas+" darab páros szám található a tömbben";



document.body.innerHTML+="<h2>Keresés tétele</h2>"
function keresesTetele(randomTomb:number[]):number[]{
  let parosSzamok:number[]=[];
  for(let i:number=0;i<randomTomb.length;i++){
    if(randomTomb[i]!%2==0){
      parosSzamok.push(randomTomb[i])
}
  }
  return parosSzamok
}
var kereses:number[]=keresesTetele(randomTomb)
document.body.innerHTML+="a páros számok a tömbben a következők:<br> "
+kereses.join(' ')


document.body.innerHTML+="<h2>Keresés tétele maximum érték alapon</h2>"
function maxErtek(randomtTomb:number[]):number{
  let maxErtek:number=randomTomb[0];
  for(let i:number=1;i<randomTomb.length;i++){
    if(randomTomb[i]>maxErtek){
      maxErtek=randomTomb[i]
    }
  }
  return maxErtek
}
var maxSzam:number=maxErtek(randomTomb)
document.body.innerHTML+="Legnagyobb érték a tömbben: "+maxSzam;

document.body.innerHTML+="<h2>Keresés tétele min alapon</h2>"
function minErtek(randomTomb:number[]):number{
  let minErtek:number=randomTomb[0];
  for(let i:number=1;i<randomTomb.length;i++){
if(randomTomb[i]<minErtek){
  minErtek=randomTomb[i]
}
}
return minErtek
}

var minSzam:number=minErtek(randomTomb)
document.body.innerHTML+="Legkisebb érték a tömbben: "+minSzam;
