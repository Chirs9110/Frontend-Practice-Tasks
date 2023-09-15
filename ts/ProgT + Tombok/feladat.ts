
// 1)EkezetesBetukSzama(modositandoSzoveg)
// Készíts egy függvényt ami a kapott szövegben megszámolja, mennyi ékezetes betű van benne.

function EkezetSzamlalo(modositandoSzoveg:string):number{
    let ekezetek:string[]=["á", "é", "i", "í", "ó", "ö", "ő", "ú", "ü", "ű", "Á", "É", "I", "Í", "Ó", "Ö", "Ő", "Ú", "Ü", "Ű",];
    let szamlalo:number=0;
    for (let i:number=0; i<modositandoSzoveg.length; i++){
      if(ekezetek.includes(modositandoSzoveg[i])){
        szamlalo++;
      }
    }
    return szamlalo
  }
  let modositandoSzoveg:string="Példaszöveg ami tartalmazhat ékezetes betűket úgy mint éáűűáúaaűéúóüöóííúá";
  document.body.innerHTML+='<h1>Példaszöveg</h1>'+modositandoSzoveg;
  document.body.innerHTML+='<h3>1. EkezetesBetuk_Szama_Feladat</h3>'
  document.body.innerHTML+='Ebben a példaszövegben: '+EkezetSzamlalo(modositandoSzoveg)+' darab ékezetes karakter található';
  
  
  
  //V2 A v2-ben nem alkalmazunk includes() függvényt, hanem dupla ciklus indítás után összehasonlítjuk a két ciklus értéket
  function EkezetSzamlaloV2(modositandoSzoveg:string):number{
    let ekezetek:string[]=["á", "é", "i", "í", "ó", "ö", "ő", "ú", "ü", "ű", "Á", "É", "I", "Í", "Ó", "Ö", "Ő", "Ú", "Ü", "Ű",];
    let szamlalo:number=0;
    for (let i: number = 0; i < modositandoSzoveg.length; i++) {
      for (let j: number = 0; j < ekezetek.length; j++) {
        if (modositandoSzoveg[i] === ekezetek[j]) {
          szamlalo++;
          break; 
        }
      }
    }
  
    return szamlalo;
  }
  document.body.innerHTML+='<br><b>V2</b> esetében: '+EkezetSzamlaloV2(modositandoSzoveg)+' darab ékezetes karakter található';
  
  
  
  
  // 2)camelCaseGenerator(modositandoSzoveg)
  // Készíts egy függvényt, ami a bemenetinek kapott szövegből camelCase szöveget hoz létre!
  function camelCaseGenerator(modositandoSzoveg: string): string {
    // Szóközök és aláhúzások szétválasztása, majd az első karakterek átalakítása nagybetűssé
    const szavak: string[] = modositandoSzoveg.split(/[\s_]+/).map((szo: string) => {
      return szo.charAt(0).toUpperCase() + szo.slice(1);
    });
  
    if (szavak.length > 0) {
      szavak[0] = szavak[0].charAt(0).toLowerCase() + szavak[0].slice(1);
    }
  
    return szavak.join('');
  }
  document.body.innerHTML+='<h3>2. camelCaseGenerator_Feladat</h3>'
  const camelCaseSzoveg: string = camelCaseGenerator(modositandoSzoveg);
  document.body.innerHTML+=(camelCaseSzoveg); 
  
  
  //V2
  
  function camelCaseGenerator2(modositandoSzoveg: string): string {
    let camelCaseSzoveg: string = "";
    let capitalize: boolean = true; // Ez a változó segít követni, hogy az aktuális szó nagybetűs vagy kisbetűs legyen
  
    for (let i: number = 0; i < modositandoSzoveg.length; i++) {
     let karakter: string = modositandoSzoveg[i];
      if (karakter === " " || karakter === "_") {
        capitalize = true; 
      } else {
        if (capitalize) {
          camelCaseSzoveg += karakter.toUpperCase();
          capitalize = false;
        } else {
          camelCaseSzoveg += karakter.toLowerCase();
        }
      }
    }
  
    return camelCaseSzoveg;
  }
  
  let camelCaseSzoveg2: string = camelCaseGenerator2(modositandoSzoveg);
  document.body.innerHTML+='<br><b>V2</b> esetében: '+(camelCaseSzoveg) +'<br>';
  
  // 3) PrimLista(vizsgaltTomb)
  // Készíts egy függvényt, ami kiírja melyek a prímszámok a vizsgált tömbödben, ha van ilyen, ha nincs akkor térjen vissza a "Nincs prímszám a tömbben" szöveggel
  
  function PrimLista(vizsgaltTomb: number[]): string {
    const prims: number[] = [];
  
    for (let i: number = 0; i < vizsgaltTomb.length; i++) {
      const szam: number = vizsgaltTomb[i];
  
      if (szam <= 1) {
        continue;
      }
  
      let isPrime: boolean = true;
  
      for (let j: number = 2; j <= Math.sqrt(szam); j++) {
        if (szam % j === 0) {
          isPrime = false;
          break;
        }
      }
  
      if (isPrime) {
        prims.push(szam);
      }
    }
  
    if (prims.length > 0) {
      return "A prímszámok a tömbben: " + prims.join(", ");
    } else {
      return "Nincs prímszám a tömbben";
    }
  }
  
  document.body.innerHTML+='<h3>3. PrimLista_Feladat</h3>'
  const vizsgaltTomb: number[] = [2, 3, 5, 7, 9, 10, 11];
  document.body.innerHTML += PrimLista(vizsgaltTomb);
  