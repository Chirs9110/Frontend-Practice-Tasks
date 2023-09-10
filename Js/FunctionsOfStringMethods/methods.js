//Csak a fele
//Készíts egy olyan függvényt, ami egy adott paraméterként kapott szövegből minden második karaktert törli. 

let peldaSzoveg = 'Szöveg a példa kedvéért';
function csakaFele(szoveg) {
    let ujSzoveg = '';
    for (let i = 0; i < szoveg.length; i += 2) {
        ujSzoveg += szoveg[i];
    }
    return ujSzoveg;
}
document.body.innerHTML += csakaFele(peldaSzoveg);

//Tabusító
//Készíts egy olyan függvényt, ami egy adott paraméterként kapott szövegből bizonyos szintén paraméterként kapott karaktert töröl.

//Magánhangzó tabusító
//Készíts egy olyan függvényt, ami egy adott paraméterként kapott szövegből törli az összes magánhangzót.
