/*Név: Czinege Krisztián
csoport típus: Junior Frontend
csoport: #Team11
*/

// Task1
function keszito() {

    document.write(`Név: Czinege Krisztián<br>`);
    document.write(`csoport "típus": Junior Frontend<br>`);
    document.write(`csoport: #Team11<br>`);
}
keszito()

//Task2
function hatvanyozo(a, b) {
    a = prompt(`Adj meg egy számot`);
    b = prompt(`Add meg a hatványozás értékét`);
    let osszeg = a ** b;
    document.write(`A(z) ${a} <sup>${b}</sup>-on/en = <b>${osszeg}</b>`);

}
hatvanyozo()

//Task3

function parosLetrehoz(alsoHatar, felsoHatar) {
    let parosSzam = Math.round(Math.random() * (felsoHatar - alsoHatar)) + alsoHatar;
    if (parosSzam % 2 == 0) { return parosSzam }

    else if (parosSzam % 2 != 0) { return parosSzam + 1 }
} document.write(parosLetrehoz(2, 100));

//Task4
function testTomegIndex(suly, magassag) {
    suly = prompt(`Add meg a súlyodat (kilogramban)`);
    magassag = prompt(`Add meg a magasságod (méterben)`);
    let bmi = suly / (magassag * magassag);
    if (bmi < 16) {
        return "sulyosSovanysag";
    }
    else if
        (bmi > 16 && bmi < 16.99) {
        return "mersekeltSovanysag";
    }
    else if
        (bmi > 17 && bmi < 18.49) {
        return "enyheSovanysag";
    }
    else if
        (bmi > 18.5 && bmi < 24.99) {
        return "normalisTestsuly";
    }
    else if
        (bmi > 25 && bmi < 29.99) {
        return "tulsulyos";
    }
    else if
        (bmi > 30 && bmi < 34.99) {
        return "IfokuElhizas";
    }
    else if
        (bmi > 35 && bmi < 39.99) {
        return "IIfokuElhizas";
    }
    else
        (bmi > 40)
    return "IIIfokuSulyosElhizas";
}

testTomegIndex()




//Task5
function egeszOsztoE(a, b) {
    a = prompt(`Adj meg egy számot`);
    b = prompt(`Add meg az osztó értékét`);
    let osszeg = a / b;

    if (a % b == 0) {
        return true;
    }
    else {
        return false;
    }
}
egeszOsztoE()