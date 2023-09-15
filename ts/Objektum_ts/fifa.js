"use strict";
var csapatAdat = [
    "Anglia;4;0;1662",
    "Argentína;10;0;1614",
    "Belgium;1;0;1752",
    "Brazília;3;-1;1719",
    "Chile;17;-3;1576",
    "Dánia;14;-1;1584",
    "Franciaország;2;1;1725",
    "Hollandia;13;3;1586",
    "Horvátország;8;-1;1625",
    "Kolumbia;9;-1;1622",
    "Mexikó;12;0;1603",
    "Németország;16;-1;1580",
    "Olaszország;15;1;1583",
    "Peru;19;0;1551",
    "Portugália;5;1;1643",
    "Spanyolország;7;2;1631",
    "Svájc;11;0;1604",
    "Svédország;18;0;1560",
    "Szenegál;20;0;1546",
    "Uruguay;6;-1;1639"
];
//megadtuk az alap struktúrát
function ObjektumFeltolto(feltoltendoElem) {
    var beolvasottAdatok = [];
    for (let i = 0; i < feltoltendoElem.length; i++) {
        let darabolandoSor = feltoltendoElem[i].split(";");
        let objektum = {
            csapat: darabolandoSor[0],
            helyezes: Number(darabolandoSor[1]),
            valtozas: Number(darabolandoSor[2]),
            pontszam: Number(darabolandoSor[3]),
        };
        beolvasottAdatok.push(objektum);
    }
    return beolvasottAdatok;
}
var fifaAdatok = ObjektumFeltolto(csapatAdat);
function AdatKiiro(adatok) {
    var tabla = document.createElement('table');
    var tablaOsztaly = 'tablaOsztaly';
    tabla.classList.add(tablaOsztaly);
    // Táblázat fejléce
    var tablaFejlec = document.createElement('tr'); //
    var csapatFejlec = document.createElement('th');
    csapatFejlec.textContent = 'Csapat';
    var helyezesFejlec = document.createElement('th');
    helyezesFejlec.textContent = 'Helyezés';
    var valtozasFejlec = document.createElement('th');
    valtozasFejlec.textContent = 'Változás';
    var pontszamFejlec = document.createElement('th');
    pontszamFejlec.textContent = 'Pontszám';
    tablaFejlec.appendChild(csapatFejlec);
    tablaFejlec.appendChild(helyezesFejlec);
    tablaFejlec.appendChild(valtozasFejlec);
    tablaFejlec.appendChild(pontszamFejlec);
    //bevonjuk a táblázat alá a thead elemeket
    tabla.appendChild(tablaFejlec);
    // Táblázat sorai
    for (let i = 0; i < adatok.length; i++) {
        var sor = document.createElement('tr');
        var csapatCella = document.createElement('td');
        csapatCella.textContent = adatok[i].csapat;
        var helyezesCella = document.createElement('td');
        helyezesCella.textContent = adatok[i].helyezes.toString();
        var valtozasCella = document.createElement('td');
        valtozasCella.textContent = adatok[i].valtozas.toString();
        var pontszamCella = document.createElement('td');
        pontszamCella.textContent = adatok[i].pontszam.toString();
        sor.appendChild(csapatCella);
        sor.appendChild(helyezesCella);
        sor.appendChild(valtozasCella);
        sor.appendChild(pontszamCella);
        tabla.appendChild(sor);
    }
    document.body.appendChild(tabla);
}
// csapatok száma .length
AdatKiiro(fifaAdatok);
document.body.innerHTML += "<br><h2>Adatok megjelenítése:</h2>";
function cspatokSzama(adatok) {
    document.body.innerHTML += "<br>A világranglistán: " + adatok.length + " csapat szerepel // csapatok száma .length";
}
cspatokSzama(fifaAdatok);
//Átlagpontszámok kiíratása
function AtlagPontszam(adatok) {
    let pontOsszeg = 0;
    for (let i = 0; i < adatok.length; i++) {
        pontOsszeg += adatok[i].pontszam;
    }
    document.body.innerHTML += "<br>A csapatok átlagos pontszáma: " + pontOsszeg / adatok.length + " pont";
}
AtlagPontszam(fifaAdatok);
function legTobbetJavito(adatok) {
    let maxIndex = 0;
    for (let i = 0; i < adatok.length; i++) {
        if (adatok[i].valtozas > adatok[maxIndex].valtozas) {
            maxIndex = i;
        }
    }
    // document.body.innerHTML += `<br><ul>A legtöbbet javító csapat:<li>Helyezés: ${adatok[maxIndex].helyezes}</li><li>Csapat: ${adatok[maxIndex].csapat}</li><li>Pontszám: ${adatok[maxIndex].pontszam} pont</li></ul> `;
    var tabla = document.createElement('table');
    var tablaOsztaly2 = 'tablaOsztaly2';
    tabla.classList.add(tablaOsztaly2);

    var cimFejlec = document.createElement('caption');
    cimFejlec.textContent = "A legtöbbet javító csapat";

    var tablaFejlec = document.createElement('tr');
    var helyezesFejlec = document.createElement('th');
    helyezesFejlec.textContent = 'Helyezés';
    var csapatFejlec = document.createElement('th');
    csapatFejlec.textContent = 'Csapat';
    var pontszamFejlec = document.createElement('th');
    pontszamFejlec.textContent = 'Pontszám';

    tablaFejlec.appendChild(helyezesFejlec);
    tablaFejlec.appendChild(csapatFejlec);
    tablaFejlec.appendChild(pontszamFejlec);

    tabla.appendChild(cimFejlec);
    tabla.appendChild(tablaFejlec);

    // Táblázat sorai
    var sor = document.createElement('tr');

    var helyezesCella = document.createElement('td');
    helyezesCella.textContent = adatok[maxIndex].helyezes.toString();
    var csapatCella = document.createElement('td');
    csapatCella.textContent = adatok[maxIndex].csapat;

    var pontszamCella = document.createElement('td');
    pontszamCella.textContent = adatok[maxIndex].pontszam.toString();

    sor.appendChild(helyezesCella);
    sor.appendChild(csapatCella);
    sor.appendChild(pontszamCella);

    tabla.appendChild(sor);

    document.body.appendChild(tabla);

}
legTobbetJavito(fifaAdatok);
function vanEmagyar(adatok) {
    let szerepelE = false;
    for (let i = 0; i < adatok.length; i++) {
        if (adatok[i].csapat == "Magyarország") {
            szerepelE = true;
        }
    }
    if (szerepelE == true) {
        document.body.innerHTML += ("<br>A csapatok között szerepel Magyarország");
    }
    else {
        document.body.innerHTML += ("<br>A csapatok között nem szerepel Magyarország");
    }

}
vanEmagyar(fifaAdatok);
function TescosStatisztika(adatok) {
    var minuszEgy = 0;
    var nulla = 0;
    var pluszEgy = 0;
    for (let i = 0; i < adatok.length; i++) {
        if (adatok[i].valtozas == -1) {
            minuszEgy++;
        }
        else if (adatok[i].valtozas == 0) {
            nulla++;
        }
        else if (adatok[i].valtozas == 1) {
            pluszEgy++;
        }
        else { }
    }
    //táblázatban való megjelenítés
    //tábla létrehozása, tábla osztályhoz rendelése
    var tabla = document.createElement('table');
    var tablaOsztaly2 = 'tablaOsztaly2';
    tabla.classList.add(tablaOsztaly2);
    var cimFejlec = document.createElement('caption');
    cimFejlec.textContent = "Statisztika táblázatosan megjelenítve";
    tabla.appendChild(cimFejlec);
    //fejlécek és sorok kialakítása
    var tablaFejlec = document.createElement('tr');
    var nullaHelyetValtozottFejlec = document.createElement('th');
    nullaHelyetValtozottFejlec.textContent = 'Nem változott a tabellán';
    tablaFejlec.appendChild(nullaHelyetValtozottFejlec);
    var minuszEgyFejlec = document.createElement('th');
    minuszEgyFejlec.textContent = '-1 helyet lépett vissza a tabellán';
    var pluszEgyFejlec = document.createElement('th');
    pluszEgyFejlec.textContent = '+1 helyet lépett előre a tabellán';
    tablaFejlec.appendChild(nullaHelyetValtozottFejlec);
    tablaFejlec.appendChild(minuszEgyFejlec);
    tablaFejlec.appendChild(pluszEgyFejlec);
    //bevonjuk a táblázat alá a thead elemeket
    tabla.appendChild(tablaFejlec);
    //td sor kialakítása
    var sor = document.createElement('tr');
    var nullaHelyetValtozottCella = document.createElement('td');
    nullaHelyetValtozottCella.textContent = nulla.toString();
    //A textContent tulajdonságon keresztül az elemekbe csak szöveges értékeket lehet beállítani, és ha
    // egy számot szeretnénk szöveges formában megjeleníteni, akkor a toString() függvényt használjuk a szám szöveggé alakításához, és megjelenítéséhez.
    sor.appendChild(nullaHelyetValtozottCella);
    //minden sohoz hozzáadjuk legvégül az elemet
    var minuszEgyCella = document.createElement('td');
    minuszEgyCella.textContent = minuszEgy.toString();
    sor.appendChild(minuszEgyCella);
    var pluszEgyCella = document.createElement('td');
    pluszEgyCella.textContent = pluszEgy.toString();
    sor.appendChild(pluszEgyCella);
    //sor hozzárendelése a táblázathoz
    tabla.appendChild(sor);
    document.body.appendChild(tabla);
    //appendChild(tabla) metódus hozzáadja a tabla változóban tárolt elemet a dokumentum testéhez, 
    //így megjelenítve azt a weboldalon.
}
TescosStatisztika(fifaAdatok);
