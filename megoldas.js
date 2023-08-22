//Task 1 "Overcomplicated feladat" 

const tanulo = {
    nev: `Czinege Krisztián`,
    csoport: `#Team11`,
    adatok: function () {
        document.write(this.nev + " " + this.csoport);
    },
}
tanulo.adatok();
let a = 95;
let b = 90;
let c = 60;
document.write(`<br>A HTML érthetősége: ${a},`);
document.write(`<br>A CSS érthetősége: ${b},`);
document.write(`<br>A JS érthetősége: ${c}`);


//Task 2

let x1 = prompt(`Adj meg egy számot`);
let x2 = prompt(`Add meg hatványozás értékét`);
document.write(`Az eredmény:${x1 ** x2}<br>`);


// Task 3 - nem saját megoldás

let also = Number(prompt(`Add meg a kisebbik szám értéket`));
let felso = Number(prompt(`Add meg a nagyobb szám értéket`));
let generaltParosSzam = Math.round(Math.random() * (felso - also) + also);
if (generaltParosSzam % 2 == 0) {
    document.write("A generalt random szám" + generaltParosSzam);
}
else if (generaltParosSzam != felso) {
    document.write(`A generált random szám ${generaltParosSzam + 1}`);
}
else {

    document.write(`A generált random szám ${generaltParosSzam - 1}`);
}



// Task 4 Switch-el

let kor = prompt(`Add meg az életkorod`);

switch (true) {
    case kor > 0.1 && kor < 6:
        document.write(`Kisgyermekkor`);
        break;
    case kor > 6 && kor < 12:
        document.write(`Gyermekkor`);
        break;
    case kor > 12 && kor < 16:
        document.write(`Serdülőkor`);
        break;
    case kor > 16 && kor < 20:
        document.write(`Ifjúkor`);
        break;
    case kor > 30 && kor < 60:
        document.write(`Fiatal felnőtt`);
        break;
    case kor > 60 && kor < 119:
        document.write(`Aggkor`);
        break;
    default:
    case kor > 0 && kor > 120:
        alert(`Hibás adat`);
}


//Task 5 - nem saját megoldás

let vizsgalandoSzam = Number(prompt("Add meg a vizsgálandó számot:"));
let oszto = Number(prompt("Add meg a vizsgálni kívánt osztót:"));
if (vizsgalandoSzam % oszto == 0) {
    document.write(`A(z) ${oszto} osztója a ${vizsgalandoSzam} értéknek`);
}
else {

    document.write(`A(z) ${oszto} NEM osztója a ${vizsgalandoSzam} értéknek`);
}

//Task 6

for (let i = 1; i <= 10; i++) {
    document.write(`${i * i},`);
}