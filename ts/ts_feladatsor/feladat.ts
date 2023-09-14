document.body.innerHTML += "<h1>TypeScript Feladatsor</h1>";

// 1. feladat – Diák infó [DiakInfo]
// Készítsen egy függvényt három paraméterrel [nev:szoveg], [csoport:szam] és [típus:bool]
// A név változót egy az egyben adja vissza a stringben, a csoport változót fűzze hozzű kiegészítve írassa ki írja elé a „Team” kifejezést, a bool változó [true] esetén a „Junior Frontend” [false] esetén a „Webprogramozó” szöveg jelenjen meg a függvény által.
// Kipróbálásra: DiakInfo(„Minta Márton”, 8, true);
// Visszatérési érték[string]: Minta Márton [Team08] – Junior Frontend
function DiakInfo(nev: string, csoport: number, tipus: boolean): string {
    let team: string; csoport < Number(10) ? team = "Team0" + csoport : team = "Team" + csoport;;
    let pozicio: string;
    pozicio = tipus ? "Junior Frontend" : "Webprogramozó";
    return `${nev} [${team}] ${pozicio}`;
}

document.body.innerHTML += (DiakInfo("Minta Márton", 8, false)) + '<br>';
document.body.innerHTML += (DiakInfo("Tréfa Tamás", 5, true)) + '<br>';
document.body.innerHTML += (DiakInfo("Kamu Károly", 12, false)) + '<br>';
document.body.innerHTML += (DiakInfo("Vicces Vera", 7, true)) + '<br>';



// 2. feladat – Magatartás-Szorgalom [SzovegesErtekeles]
// Készíts egy függvényt, ami bemeneti paraméternek vár egy számot [jegy], ami visszatért két értékkel,
// az adott bemeneti paraméter szöveges értékelésével, 2 PARAMÉTERREL! (Használj Tuple-t) Segítség a szöveges visszatérési értékekhez
// Jegy Szorgalom 5 Példás
// 4 Jó
// 3 Változó
// 2 Hanyag
// Kipróbálásra: SzovegesErtekeles(2); Visszatérési érték[string] tuple: [Hanyag,Rossz]
// Magatartás Példás
// Jó
// Változó Rossz

function SzovegesErtekeles(jegy: number): [string, string] {
    let szorgalom: string;
    let magatartas: string;
    switch (jegy) {
        case 5:
            szorgalom = "Példás";
            magatartas = "Példás";

            break;
        case 4:
            szorgalom = "Jó";
            magatartas = "Jó";
            break;
        case 3:
            szorgalom = "Változó";
            magatartas = "Változó";
            break;
        case 2:
            szorgalom = "Hanyag";
            magatartas = "Rossz";
            break;
        default:
            szorgalom = "Hibás adat";
            magatartas = "Hibás adat";
    }
    return [szorgalom, magatartas];
}



document.body.innerHTML += SzovegesErtekeles(2) + '<br>';
document.body.innerHTML += SzovegesErtekeles(3) + '<br>';
document.body.innerHTML += SzovegesErtekeles(4) + '<br>';
document.body.innerHTML += SzovegesErtekeles(5) + '<br>';

//   3. feladat – Hárommal oszható számok listája [HarommalOszthatokSzama]
// Készíts egy tömb bemeneti paraméterrel rendelkező függvényt, ami visszaadja a tömbben lévő hárommal osztható számok mennyiségét.
// Kipróbálásra: HarommalOszthatokSzama([10, 23, 12, 24, 31, 33, 42, 20 ]); Visszatérési érték[number]: 4

function HarommalOszthatokSzama(szamok: number[]): number {
    let osszeg: number = 0;
    for (let i: number = 0; i < szamok.length; i++) {
        if (szamok[i] % 3 == 0) {
            osszeg++
        }
    }
    return osszeg
}

document.body.innerHTML += HarommalOszthatokSzama([10, 23, 12, 24, 31, 33, 42, 20])



// 4. feladat – Nyerőszám sorsoló [Nyeroszamok]
// Készítsen egy függvényt háromparaméterrel [mennyiseg], [alsoHatar] és [felsoHatar], oldja meg hogy kigeneráljon adott mennyiségű számot az alsó és a felső határon belül, és azokban, NE LEGYEN ISMÉTLŐDÉS!
// Kipróbálásra: Nyeroszamok(5,1,90);
// Visszatérési érték[Array]: adott intervallumban lévő számok ismétlés nélkül!

function Nyeroszamok(mennyiseg: number, alsoHatar: number, felsoHatar: number): number[] {
    const nyeroszamok: number[] = [];

    for (let i = 0; i < mennyiseg; i++) {
        let ujSzam: number;
        do {
            ujSzam = Math.floor(Math.random() * (felsoHatar - alsoHatar + 1)) + alsoHatar;
        } while (nyeroszamok.includes(ujSzam));
        nyeroszamok.push(ujSzam);
    }

    return nyeroszamok;
}

var nyeroSzamok: number[] = Nyeroszamok(5, 1, 90);
document.body.innerHTML += (nyeroSzamok);

