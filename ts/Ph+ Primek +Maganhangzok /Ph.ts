//Ts feladatSor


// 1. feladat 
// Készíts egy függvényt, ami egy paraméterként megkapott ph értékből megmondja annak állapotát 
// (savas, lúgos, vagy épp semleges) 7 esetén az érték semleges, alatta savas, felette pedig lugos állapotú 
// Függvény neve: PhErtek() Paraméter(ek): vizsgaltErtek (szám típusú) Visszatérési értéke: szöveg típusú érték 
function PhErtek(vizsgaltErtek: number): string {
    let szoveg: string = '';
    if (vizsgaltErtek === 7) {
        szoveg = 'semleges';
    }
    else if (vizsgaltErtek < 7) {
        szoveg = 'savas'
    }
    else if (vizsgaltErtek > 7) {
        szoveg = 'lugos'
    }
    return szoveg
}
document.body.innerHTML += PhErtek(7) + '<br>';
document.body.innerHTML += PhErtek(8) + '<br>';
document.body.innerHTML += PhErtek(6) + '<br>';



// 2. feladat 
// Készítsen egy random tömböt vizsgáló függvényt mely egy tömb minden elemét megvizsgálja és 
// visszaadja hány prímszám található benne! 
// Függvény neve: PrimekSzama         
// Paraméterek: vizsgaltTomb(szám típusú tömb)         
// Visszatérési értéke: szám típusú változó

function PrimekSzama(vizsgaltTomb: number[]): number {
    let primek: number = 0;
    for (let i: number = 0; i < vizsgaltTomb.length; i++) {
        let osztokSzama: number = 0;
        for (let j: number = 0; j < vizsgaltTomb[i]; j++) {
            if (vizsgaltTomb[i] % j == 0) {
                osztokSzama++
            }
        }
        if (osztokSzama == 2) {
            primek++;
        }
    }
    return primek
}
document.body.innerHTML += PrimekSzama([43, 2, 12, 43, 667, 21, 8, 9, 121, 323, 43, 232, 56])

// 3. feladat 
// Készíts egy függvényt, ami egy paraméterként megkapott szövegről megmondja, hány magánhangzót
// tartalmaz. 
// Függvény neve: MaganHangzokSzama() Paraméter(ek): vizsgaltSzoveg(karakterlánc típusú változó) Visszatérési értéke: szám érték 

function MaganHangzokSzama(vizsgaltSzoveg: string): number {
    let szamlalo: number = 0;
    let maganhangzok: string[] = ['a', 'á', 'e', 'é', 'i', 'í', 'o', 'ó', 'ö', 'ő', 'u', 'ú', 'ü', 'ű'];
    for (let i: number = 0; i < vizsgaltSzoveg.length; i++) {
        for (let j: number = 0; j < maganhangzok.length; j++)
            if (vizsgaltSzoveg[i].includes(maganhangzok[j]))
                szamlalo++
    }
    return szamlalo
}
document.body.innerHTML += MaganHangzokSzama('Gaudeamus igitur iuvenes dum sumus.')
