//Csak a fele
//Készíts egy olyan függvényt, ami egy adott paraméterként kapott szövegből minden második karaktert törli. 

let peldaSzoveg = 'Szöveg a példa kedvéért';
document.body.innerHTML += `<h1>${peldaSzoveg}</h1>`
function csakaFele(szoveg) {
    let ujSzoveg = '';
    for (let i = 0; i < szoveg.length; i += 2) {
        ujSzoveg += szoveg[i];
    }
    return ujSzoveg;
}
document.body.innerHTML += '<h3>1. Feladat </h3>' + csakaFele(peldaSzoveg) + '<br>';

//Magánhangzó tabusító
//Készíts egy olyan függvényt, ami egy adott paraméterként kapott szövegből törli az összes magánhangzót.

function maganHangzoTorlo(peldaSzoveg) {
    return peldaSzoveg.replace(/[aáeéiíoóöőuúüűAÁEÉIÍOÓÖŐUÚÜŰ]/g, "");
}

let eredmeny = maganHangzoTorlo(peldaSzoveg);

document.body.innerHTML += '<h3>2. Feladat </h3>' + eredmeny + '<br>';