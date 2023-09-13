
//Task1 
//Feladat: Számok összeadása
//Írj egy TypeScript függvényt, amely két számot kap paraméterként, és visszaadja az összegüket.

function szamOsszeado(a: number, b: number): number {
    let eredmeny = a + b;
    return eredmeny;
  }
  szamOsszeado(97600, 86024);
  document.body.innerHTML += "<b>szamOsszeado(97600, 86024); függvény által összeadott számok összege:</b> " + szamOsszeado(97600, 86024).toString() + "<hr>";
  
  /*
  Ha nem használod a toString() függvényt, akkor a számot alapértelmezetten a HTML-ben nem fogja megjeleníteni. 
  Az innerHTML tulajdonság általában string típusú értéket vár, ezért a számot implicit módon át kell alakítani stringgé, 
  hogy megfelelően megjelenjen.
  Ha szeretnéd, hogy a számtani feladatok eredménye látható legyen az innerHTML-ben, 
  akkor át kell alakítanod a számokat string típusba, például a toString() metódus segítségével*/
  
  //prompt-al az érdekesség kedvéért
  
  let szam1: number = parseInt(prompt('Kérem az első számot')!);
  let szam2: number = parseInt(prompt('Kérem a második számot')!);
  
  /*a prompt-ok végén található egy (!)jel az ún. "non-null assertion operator" a TypeScriptben. 
  Amikor egy érték után helyezzük el, azt jelzi a TypeScriptnek, hogy az érték nem lesz null vagy undefined, 
  még akkor sem, ha az adott típus alapértelmezett beállítása szerint lehetséges lenne.
  Az ! operátor használata egyfajta módszer arra, hogy a TypeScript figyelmeztetéseit kikapcsold, 
  amikor az adott változóra vonatkozóan biztos vagy abban, hogy nem lesz null vagy undefined.
  
  Fontos megjegyezni, hogy a felkiáltójel használata nem teszi biztonságossá a kódot null vagy undefined ellen, 
  hanem a TypeScript típusellenőrzésének kikapcsolását jelenti. Érdemes gondoskodni arról, hogy a felhasználó valóban értelmes értéket adjon 
  meg a promptban, és ellenőrizni, hogy az eredmény nem null vagy undefined, mielőtt tovább folytatnád a kód végrehajtását.*/
  
  let osszeg = szamOsszeado(szam1, szam2);
  document.body.innerHTML += " felugró ablak által összeadott számok összege: <b>" + osszeg.toString() + "</b><hr>"
  
  
  // négyzet kerület ts függvény
  function NegyzetKerulet(aOldal: number): void {
    document.body.innerHTML += ("A " + aOldal + " oldalú négyzet kerületének összege: " + (aOldal * 4))
  }
  NegyzetKerulet(10297) + "<hr>";
  // négyzet terület ts függvény
  function NegyzetTerulet(aOldal: number): number {
    return aOldal * aOldal;
  }
  var eredmeny: number = NegyzetTerulet(565);
  document.body.innerHTML += "<br>A négyzet területének összege: " + eredmeny + "<hr>"
  
  
  //Paraméter nélküli visszatérési értékes fggvny
  function SzamGenerator(): number {
    return Math.floor(Math.random() * 100);
  }
  document.body.innerHTML += "Gernerált szám eredménye: " + SzamGenerator() + "<hr>";
  
  
  //Task2
  //Feladat: Tömb elemeinek száma
  //Írj egy TypeScript függvényt, amely egy tömböt kap paraméterként, és visszaadja a tömb elemeinek számát.
  function FuggvenyMegszamlalo(array: number[]): number {
    return array.length
  }
  
  document.body.innerHTML += "Array number tömb eredménye: " + FuggvenyMegszamlalo([2, 3, 4, 5, 6, 7]) + "<br>";
  document.body.innerHTML += "Array number tömb kód: <br>function FuggvenyMegszamlalo (array:number[]):number{<br>return array.length}<br>Használt számok: FuggvenyMegszamlalo([2,3,4,5,6,7])<hr>";
  
  
  function betuSzamlalo(array: string[]): number {
    let karakterekSzama: number = 0;
    for (let i: number = 0; i < array.length; i++) {
        karakterekSzama += array[i].length
    }
    return karakterekSzama
  }
  document.body.innerHTML += "String tömb eredménye: " + betuSzamlalo(["Ezeknek a szavaknak a számát kellene visszaadni"]) + "<br>";
  document.body.innerHTML += "<br><b>String alapú tömbök esetén for ciklust kell alkalmazni hogy ha azt akarjuk megszámolni hogy mennyi karakter található az adott tömbben </b><hr>";
  
  //Task3
  // Feladat: Páros számok
  // Írj egy TypeScript függvényt, amely egy számokat tartalmazó tömböt kap paraméterként, és visszaadja egy új tömbben az eredeti tömb páros számait.
  
  function ParosSzamok(array: number[]): number[] {
    let parosElemek: number[] = [];
    for (let i: number = 0; i < array.length; i++) {
        if (array[i] % 2 == 0) {
            parosElemek.push(array[i]);
        }
    }
    return parosElemek
  }
  let szam: number[] = [SzamGenerator()]
  let parosElemekListaja: number[] = ParosSzamok(szam);
  document.body.innerHTML += "ParosSzamok: " + ParosSzamok(szam) + "<br>";
  
  //Task4
  // Feladat: Karakterek száma
  // Írj egy TypeScript függvényt, amely egy stringet kap paraméterként, és visszaadja a stringben található karakterek számát (szóközök nélkül).
  function SztringSzamlalo(str: string): number {
    let Szamlalo: number = 0;
    for (let i: number = 0; i < str.length; i++) {
        if (str[i] !== '') {
            Szamlalo++
        }
    }
    return Szamlalo
  }
  let peldaSztring: string = "Ezt a karaktert kőne megszámlálni hogy mi van véle vala"
  document.body.innerHTML += "peldaSztring: " + SztringSzamlalo(peldaSztring) + "<br>";
  
  //Task5
  
  // Feladat: Tömb elemeinek összege
  // Írj egy TypeScript függvényt, amely egy számokat tartalmazó tömböt kap paraméterként, és visszaadja a tömb elemeinek összegét
  
  function szamokOsszege(array: number[]): number {
    let osszeg: number = 0;
    for (let i: number = 0; i < array.length; i++) {
        osszeg += array[i]
    }
    return osszeg
  }
  let peldaSzamok: number[] = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,];
  document.body.innerHTML += ("<hr>" + szamokOsszege(peldaSzamok));
  // Feladat: Tömb elemeinek átlaga
  // Írj egy TypeScript függvényt, amely egy számokat tartalmazó tömböt kap paraméterként, és visszaadja az elemek átlagát.
  
  function TsTomb(array: number[]): number {
    let osszeg: number = 0;
    for (let i: number = 0; i < array.length; i++) {
        osszeg += array[i]
    }
    let atlag: number = osszeg / array.length;
    return Number(atlag.toFixed())
  }
  let probaSzamok: number[] = [34, 56, 7, 8, 99, 65]
  document.body.innerHTML += ("<hr>" + TsTomb(probaSzamok) + "<br>Kerekítéshez használd a függvényben:    let atlag:number = osszeg/array.length;<br>return Number (atlag.toFixed())");
  
  
  
  
  // Feladat: Páros számok szűrése
  // Írj egy TypeScript függvényt, amely egy számokat tartalmazó tömböt kap paraméterként, és visszaadja egy új tömbben az eredeti tömb páros számait.
  function parosSzam(array: number[]): number[] {
    let ParosElemek: number[] = [];
    for (let i: number = 0; i < array.length; i++) {
        if (array[i] % 2 == 0) {
            ParosElemek.push(array[i])
        }
    }
    return ParosElemek
  }
  document.body.innerHTML += ("<hr>" + parosSzam(probaSzamok).join(' '));
  
  
  
  
  // Feladat: Tömb elemeinek összefűzése
  // Írj egy TypeScript függvényt, amely egy szövegeket tartalmazó tömböt kap paraméterként, és visszaadja a tömb elemeinek összefűzött szövegét.
  function tombOsszefuzes(tomb: string[]): string {
    return tomb.join(' ');
  }
  let peldaSzoveg: string[] = ["Egyszer", "volt", "Hol nem volt"]
  document.body.innerHTML += ("<hr>" + tombOsszefuzes(peldaSzoveg));
  
  
  // Feladat: Tömb elemeinek megfordítása
  // Írj egy TypeScript függvényt, amely egy számokat tartalmazó tömböt kap paraméterként, és visszaadja az eredeti tömb elemeinek fordított sorrendjét.
  function tombFordito(array: number[]) {
    for (let i: number = 0; i < array.length; i++) {
        return array.reverse()
    }
  }
  document.body.innerHTML += ("<hr>" + tombFordito(probaSzamok) + "");
