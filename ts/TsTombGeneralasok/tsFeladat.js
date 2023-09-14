"use strict";
// Készítse el az alábbi feladatokat TypeScriptben, ügyeljen a típusok megfelelő megadására: 
// 1. feladat 
// Készíts egy függvényt, ami kigenerál egy random számot, adott paraméterként megadott 
// intervallumban (alsoHatar és felsoHatar) függvény neve legyen Rng. 
//         Függvény neve: Rng 
//         Paraméterek: alsoHatar, felsoHatar 
//         Visszatérési értéke: szám típusú változó 
function Rng(alsoHatar, felsoHatar) {
    return Math.round(Math.random() * (felsoHatar - alsoHatar) + alsoHatar);
}
// 2. feladat 
// Készítsen egy univerzális tömb generátort, ami az előző függvény használva és 3 paraméter 
// segítségével kigenerál egy random számokból álló tömböt! 
//         Függvény neve: TombGenerator 
//         Paraméterek: meret, alsoHatar, felsoHatar 
//         Visszatérési értéke: szám típusú tömb 
function TombGenerator(meret, alsoHatar, felsoHatar) {
    let tomb = [];
    for (let i = 0; i < meret; i++) {
        tomb.push(Math.round(Math.random() * (felsoHatar - alsoHatar)) + alsoHatar);
    }
    return tomb;
}
// 3. feladat 
// Készítsen az előző generált random tömböt vizsgáló függvényt mely az előbb legenerált tömb minden 
// elemét megduplázza! 
//         Függvény neve: Duplazo 
//         Paraméterek: VizsgaltTomb(szám típusú tömb) 
//         Visszatérési értéke: szám típusú tömb 
function Duplazo(VizsgaltTomb) {
    let tomb = [];
    for (let i = 0; i < VizsgaltTomb.length; i++) {
        tomb.push(VizsgaltTomb[i] * 2);
    }
    return tomb;
}
// 4. feladat 
// Készítsen az előző generált random tömböt vizsgáló függvényt mely az először legenerált tömb 
// minden elemét megvizsgálja és visszaadja hány prímszám található benne! 
//         Függvény neve: PrimekSzama 
//         Paraméterek: VizsgaltTomb(szám típusú tömb) 
//         Visszatérési értéke: szám típusú változó 
function PrimekSzama(VizsgaltTomb) {
    let primek = 0;
    for (let i = 0; i < VizsgaltTomb.length; i++) {
        let osztokSzama = 0;
        for (let j = 1; j < VizsgaltTomb[i]; j++) {
            if (VizsgaltTomb[i] % j == 0) {
                osztokSzama++;
            }
        }
        if (osztokSzama == 2) {
            primek++;
        }
    }
    return primek;
}
// 5. feladat 
// Készítsen az előző generált random tömböt vizsgáló függvényt mely az először legenerált tömb 
// minden elemét megvizsgálja és visszaadja hány egyedi elem található benne! 
//         Függvény neve: EgyediElemek 
//         Paraméterek: VizsgaltTomb(szám típusú tömb) 
//         Visszatérési értéke: szám típusú tömb
function EgyediElemek(vizsgaltTomb) {
    var egyediElemekTomb = [];
    for (var i = 0; i < vizsgaltTomb.length; i++) {
        var szerepelE = false;
        for (var j = 0; j < egyediElemekTomb.length; j++) {
            if (vizsgaltTomb[i] == egyediElemekTomb[j]) {
                szerepelE = true;
            }
        }
        if (szerepelE == false) {
            egyediElemekTomb.push(vizsgaltTomb[i]);
        }
    }
    return egyediElemekTomb;
}
