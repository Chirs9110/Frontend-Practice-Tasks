/* A Feladatsort készítette: Nagy Ferenc
    1. keszito() – Bemeneti paraméterek száma: 0 
    Készíts egy függvényt mely kiírja az adott file készítőjének  
    • Nevét 
    • Csoportjának típusát (Junior Frontend vagy Webfejlesztő)  
    • Csoportjának azonosítóját (melyik #Team tagja) 
    Visszatérési érték: nincs 
*/
function keszito() {
    let nev = 'Czinege Krisztián';
    let csoportTipus = 'Junior Frontend Fejlesztő';
    let csoportAzonosito = '#Team11';
    document.body.innerHTML += `A készítő neve: <b>${nev}</b> <br> Csoportjának típusa: <b>${csoportTipus}</b><br>Csoportjának azonosítója: <b>${csoportAzonosito}</b>`
}
keszito();
/*
2. feladat: hatvanyozo() – Bemeneti paraméterek száma: 2 (szam és hatvány) 
Készíts egy függvényt, mely paraméterként bekér egy számot és a hatványozás mértékét, és 
visszaadja annak hatványát. 
Kipróbálásra: hatvanyozo(2,3) esetleg hatvanyozo(5,3) 
Visszatérési érték: 8, illetve a második esetében 125 
*/
function hatvanyozo(szam, hatvany) {
    let eredmeny = szam ** hatvany;
    document.body.innerHTML += `A hatványozott eredmény a következő: <b>${eredmeny}</b><br>`
}
hatvanyozo(2, 3);
hatvanyozo(5, 3);


/*
3. feladat: parosLetrehoz() – Bemeneti paraméterek száma: 2 (alsó és felső határ) 
Készíts egy függvényt, ami egy adott intervallumban generál ki páros számot, és ad vissza 
értéknek.  
Kipróbálásra: parosLetrehoz(1,100);  
Visszatérési érték: 2-100-ig bármely páros szám  
*/

function parosLetrehoz(also, felso) {
    let parosSzam = Math.round(Math.random() * (felso - also + 1)) + also;
    if (parosSzam % 2 == 0) {
        document.body.innerHTML += `Az eredmeny a következő: ${parosSzam}`
    }
}
parosLetrehoz(1, 100);

/*
4. feladat: testTomegIndex() – Bemeneti paraméterek száma: 2 (suly és magasság) 
Készíts el egy  függvényt,  amelynek meg kell adnod a magasságodat méterben és a súlyodat 
kilogrammban,  és  ezek  után  visszaadja  a  jelenlegi  testtömeg  indexed rövid  szöveges 
értékelését. 
 
A testtömeg index kiszámítására, a mellékelt linken találhatsz forrást:

Forrás: https://hu.wikipedia.org/wiki/Testt%C3%B6megindex 
 
Visszatérési értékek lehetőségei (ügyelj a kis-nagybetű érzékenységre!): 
• sulyosSovanysag 
• mersekeltSovanysag 
• enyheSovanysag 
• normalisTestsuly 
• tulsulyos 
• IfokuElhizas 
• IIfokuElhizas 
• IIIfokuSulyosElhizas 
 
Kipróbálásra: testTomegIndex(200,2) esetleg testTomegIndex(45,1.5), 
testTomegIndex(25,1.2) 
Visszatérési érték: IIIfokuSulyosElhizas illetve normalisTestsuly valamint enyheSovanysag 
 */
function testTomegIndex(suly, magassag) {
    let TTI = suly / (magassag * magassag);
    if (TTI < 16) {
        document.body.innerHTML += `sulyosSovanysag<br>`
    }
    else if (TTI >= 16 && TTI < 16.99) {
        document.body.innerHTML += `mersekeltSovanysag<br>`
    }
    else if (TTI >= 17 && TTI < 18.49) {
        document.body.innerHTML += `enyheSovanysag<br>`
    }
    else if (TTI >= 18.5 && TTI < 24.99) {
        document.body.innerHTML += `normalisTestsuly<br>`
    }
    else if (TTI >= 25 && TTI < 29.99) {
        document.body.innerHTML += `tulsulyos<br>`
    }
    else if (TTI >= 30 && TTI < 34.99) {
        document.body.innerHTML += `IfokuElhizas<br>`
    }
    else if (TTI >= 35 && TTI < 39.99) {
        document.body.innerHTML += `IIfokuElhizas <br>`
    }
    else if (TTI >= 40) {
        document.body.innerHTML += `IIIfokuSulyosElhizas<br>`
    }
}
testTomegIndex(200, 2);
testTomegIndex(45, 1.5);
testTomegIndex(25, 1.2);
/*
5. feladat: egeszOsztoE() – Bemeneti paraméterek száma: 2 (szam és osztó) 
Készíts egy függvényt, mely paraméterként bekér egy számot és egy osztót és vissza adja(true 
vagy false), hogy az adott osztó, osztja-e az egész számot, úgy, hogy a maradék nulla. 
 
Kipróbálásra: egeszOsztoE(25,5) esetleg egeszOsztoE(1050,7) valamint egeszOsztoE(2048,3) 
Visszatérési érték: true, illetve a második esetében szintén true, harmadik esetén pedig false 
 
*/

function egeszOsztoE(szam, oszto) {
    let eredmeny = szam % oszto === 0;
    return eredmeny;
}
document.body.innerHTML += egeszOsztoE(25, 5) + '<br>';
document.body.innerHTML += egeszOsztoE(1050, 7) + '<br>';
document.body.innerHTML += egeszOsztoE(2048, 3);
