/*
Feladat szerzője: Nagy Ferenc
1. feladat: hosszEllenor() – Bemeneti paraméterek száma: 1 (szöveg) 
Készítsen egy függvényt, amely ellenőrzi egy bemeneti karakterlánc hosszát, és amennyiben az 
nem megfelelő (nincs legalább 8 karakter) úgy a függvény hamis értékkel tér vissza, ellenkező 
esetben az függvény visszatérési értéke természetesen igaz lesz. 
Kipróbálásra: „teszt” esetleg „feladatteszt” 
Visszatérési érték: false illetve true 
*/

function hosszEllenor(szoveg) {
    if (szoveg.length >= 8) {
        return true;
    } else {
        return false;
    }
}

document.body.innerHTML += hosszEllenor("feladat");
/*
2. feladat: tajSzamEllenor () – Bemeneti paraméterek száma: 1 (számsor szövegként) 
Készítsen  egy  függvényt  mely  szöveges  bemeneti  paraméterrel  dolgozik,  mely  számok 
sorozata, összesen 9 karakter hosszú. 
Ellenőrzés folyamata: 
 Ellenőrizni kell a karakter mennyiségét 
 (a)Majd összeadni a páros helyen lévő elemeket(4db), ezt megszorozni héttel 
 (b)Ezután összeadni a páratlan helyen lévő elemeket(4db), ezt megszorozni hárommal 
Megjegyzés: a számsor utolsó elemét csak a következő lépésnél használjuk fel.  
A feltétel igaz, ha a páros és páratlan számok véreredménye 10-zel való maradékos osztás után 
a tajszám utolsó elemének értékét adja vissza! Azaz: (a+b)%10==tajszam[8]  
Ellenkező esetben nem 
*/

function tajSzamEllenor(szamSor) {
    if (szamSor.length !== 9) {//Hossz ellenőrzése
        document.body.innerHTML += 'Hiba: A TAJ-szám hossza nem megfelelő, minimum <b>9 </b>számjegy szükséges.<br>';
        return false//visszatérés boolean-al ha nem megfelelő a számok hossza
    }
    //páros és páratlan számok összeadása és szorzása, változóba téve parseInt() fvny segítségével 
    let parosSzamok = parseInt(szamSor[1]) + parseInt(szamSor[3]) + parseInt(szamSor[5]) + parseInt(szamSor[7]);
    let paratlanSzamok = parseInt(szamSor[0]) + parseInt(szamSor[2]) + parseInt(szamSor[4]) + parseInt(szamSor[6]);
    let osszeg = (parosSzamok * 7) + (paratlanSzamok * 3);//osszeg változoóba tároljuk az eredményt
    if (osszeg % 10 === parseInt(szamSor[8])) {//ellenőrizzük a feltételeknek megfelel-e a számsor
        document.body.innerHTML += 'A TAJ-szám megfelelő.<br>';//ha igen kiíratjuk
        return true //visszatérés true-val megfelelő feltételek esetében
    }
    else {
        document.body.innerHTML += 'Hiba: A TAJ-szám nem megfelelő.<br>';//user tájékoztatása
        return false;//hamis visszatérés feltétel meghiúsulása esetén
    }
}
tajSzamEllenor('040655330');
tajSzamEllenor('11111111');
tajSzamEllenor('037687210');
tajSzamEllenor('675892223');


/* 
3. feladat: tombTerjedelem() – Bemeneti paraméterek száma: 1 (tömb) 
Határozza meg egy vagy több függvény segítségével, egy adott tömb elemeinek terjedelmét. 
Terjedelem: a tömb legkisebb és a legnagyobb eleme közötti különbség. 
A függvényt úgy készítse el, hogy bármilyen tömb paraméter esetén helyes megoldás adjon. 
*/

function generaltTomb() {//generaltTomb készítése
    let tomb = [];//üres tömb létrehozása
    for (let i = 0; i < 10; i++) {//ciklussal bejárás, legfeljebb 10 számjegyű értékkel
        tomb.push(Math.round(Math.random() * 100));//számok feltöltése a tömbbe
    }
    document.body.innerHTML += 'A tömb: ' + tomb.join(' ') + '<br>';//kiíratás
    return tomb
}


function tombTerjedelem(tomb) {
    let legKisebbElem = Math.min(...tomb);//beépített fvnyel való legkisebb érték keresés
    let legNagyobbElem = Math.max(...tomb);
    let terjedelem = legNagyobbElem - legKisebbElem;
    document.body.innerHTML += `Az eredmény a(z) ${legNagyobbElem} és a(z) ${legKisebbElem} különbségéből ered`//kiíratás
    document.body.innerHTML += '<br>A tömb terjedelme: ' + terjedelem;
}


let vizsgaltTomb = generaltTomb();
tombTerjedelem(vizsgaltTomb);

/*
4. feladat: legidosebbDolgozo() – Bemeneti paraméterek száma: 1 (objektum) 
Készíts el  egy  függvényt,  amelynek  megadsz  egy  objektumot,  melyben  biztosan  tartozik egy 
[kor]  tulajdonság minden elemhez, abból kikeresse a „legidősebb”  elemet, és visszaadja  az 
objektumban található elemnek az indexét. 
A függvényt úgy készítse el, hogy bármilyen [kor] attribútummal rendelkező paraméter esetén 
helyes megoldás adjon. 
 
Kipróbálásra: A feladathoz mellékelt objektum 
Visszatérési érték: A legidősebb objektum elem indexe (jelenleg: 3) 
*/

const Dolgozok = [{
    nev: "Koaxk Ábel",
    kor: 23,
    fizetes: 400000,
    beosztas: "Rendszergazda"
},
{
    nev: "Zsíros B. Ödön",
    kor: 45,
    fizetes: 1200000,
    beosztas: "Ügyvezető Igazgató"
},
{
    nev: "Meg Győző",
    kor: 32,
    fizetes: 600000,
    beosztas: "Marketing Manager"
},
{
    nev: "Békés Csaba",
    kor: 63,
    fizetes: 180000,
    beosztas: "Takarító"
},
{
    nev: "Pofá Zoltán",
    kor: 25,
    fizetes: 300000,
    beosztas: "Biztonsági Őr"
},
{
    nev: "Fejet Lenke",
    kor: 22,
    fizetes: 220000,
    beosztas: "Irodai Titkár"
},
{
    nev: "Vak Cina",
    kor: 30,
    fizetes: 500000,
    beosztas: "Üzem Orvos"
}
]


function legidosebbDolgozo(vizsgaltObjektum) {
    let legidosebbIndex = 0;
    for (let i = 0; i < vizsgaltObjektum.length; i++) {
        if (vizsgaltObjektum[i].kor > vizsgaltObjektum[legidosebbIndex].kor) {
            legidosebbIndex = i;
        }
    }
    return document.body.innerHTML += legidosebbIndex;
}

legidosebbDolgozo(Dolgozok);


/*
5. feladat: fizetesEmeles() – Bemeneti paraméterek száma: 1 (objektum) 
Készíts egy függvényt, mely paraméterként bekér egy objektumot, melyben biztosan tartozik 
egy [fizetes] tulajdonság minden elemhez, melyben meghatározza mennyi az átlagfizetés. 
Majd az átlag fizetés alatti emberek fizetését emeli 10%-kal. Ezekután visszaadja a módosított 
objektumot a programnak. 
A függvényt úgy készítse el, hogy bármilyen [fizetes]  attribútummal  rendelkező  paraméter 
esetén helyes megoldás adjon. 
 
 
Kipróbálásra: A feladathoz mellékelt objektum 
Visszatérési érték: A módosított objektum
*/


function atlagFizetes(vizsgaltObjektum) {
    let fizetesekOsszege = 0;
    for (let i = 0; i < vizsgaltObjektum.length; i++) {
        fizetesekOsszege += vizsgaltObjektum[i].fizetes;
    }
    return Math.round(fizetesekOsszege / vizsgaltObjektum.length);
}

let atlagFizu = atlagFizetes(Dolgozok);
function fizetesEmeles(vizsgaltObjektum) {
    let ujFizetesek = [];
    for (let i = 0; i < vizsgaltObjektum.length; i++) {
        let ujElem = {};
        ujElem.nev = vizsgaltObjektum[i].nev;
        ujElem.kor = vizsgaltObjektum[i].kor;
        ujElem.fizetes = vizsgaltObjektum[i].fizetes;
        if (vizsgaltObjektum[i].fizetes < atlagFizu) {
            ujElem.fizetes = Math.round(vizsgaltObjektum[i].fizetes * 1.1);
        }
        ujElem.beosztas = vizsgaltObjektum[i].beosztas;
        ujFizetesek.push(ujElem);
    }
    return ujFizetesek;
}

document.write("<hr>");
document.write("Átlagfizetés: " + atlagFizetes(Dolgozok) + " Ft");

function objektumKiirato(megjelenitettObjektum) {
    document.write("<table border=1>");
    document.write("<tr><th>Név</th><th>Életkor</th><th>Fizetés</th><th>Beosztás</th></tr>");
    for (let i = 0; i < megjelenitettObjektum.length; i++) {
        document.write(`<tr> <td>${megjelenitettObjektum[i].nev}</td> <td>${megjelenitettObjektum[i].kor}</td> <td>${megjelenitettObjektum[i].fizetes}</td> <td>${megjelenitettObjektum[i].beosztas}</td></tr>`);
    }
    document.write("</table>");
}
objektumKiirato(Dolgozok);

objektumKiirato(fizetesEmeles(Dolgozok));