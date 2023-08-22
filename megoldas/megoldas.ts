//Task 1
function DiakInfo(nev: string, csoport: number, tipus: boolean): string {
    let pozicio: string;
    let team: string;
    if (tipus) {
        pozicio = "Junior Frontend";
    } else {
        pozicio = "Webprogramozó";
    }
    if (csoport < 10) {
        team = "Team0" + csoport;
    } else {
        team = "Team" + csoport;
    }
    return `${nev} [${team}] ${pozicio}`;
}

var eredmeny = DiakInfo("Minta Márton", 8, true);
console.log(eredmeny);


//Task2



function SzovegesErtekeles(jegy: number): [string, string] {
    let szorgalom: string;
    let magatartas: string;

    if (jegy === 5) {
        szorgalom = "Példás";
        magatartas = "Példás";
    } else if (jegy === 4) {
        szorgalom = "Jó";
        magatartas = "Jó";
    } else if (jegy === 3) {
        szorgalom = "Változó";
        magatartas = "Változó";
    } else {
        szorgalom = "Hanyag";
        magatartas = "Rossz";
    }

    return [szorgalom, magatartas];
}
var ertekelesEredmeny: [string, string] = SzovegesErtekeles(2);
console.log(ertekelesEredmeny);

//Task 3

function HarommalOszthatokSzama(szamok: number[]): number {
    let harommalOszthatoSzamokSzama = 0;
    for (let i = 0; i < szamok.length; i++) {
        if (szamok[i] % 3 === 0) {
            harommalOszthatoSzamokSzama++;
        }
    }

    return harommalOszthatoSzamokSzama;
}

console.log(HarommalOszthatokSzama([10, 23, 12, 24, 31, 33, 42, 20])); // 4


//Task 4

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
console.log(nyeroSzamok);
