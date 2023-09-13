//Task01
vizsgazo = {
    vizsgazoNev: 'Czinege Krisztian',
    Team: '#Team11',
    erthetosegSzazalekosan: {
        html: 85,
        css: 85,
        js: 50
    }
}
document.body.innerHTML += 'A vizsgazo neve: ' + vizsgazo.vizsgazoNev + '<br> Vizsgázó csoportja: ' + vizsgazo.Team + '<br>A tartalmak érthetősége százalékosan: '
for (let kulcs in vizsgazo.erthetosegSzazalekosan) {
    document.body.innerHTML += kulcs + ': ' + vizsgazo.erthetosegSzazalekosan[kulcs] + '%, ';
}

//Task02
let szamEgy = prompt('Add meg a kezdőértéket');
let hatvanyozando = prompt('Add meg hanyadik hatányra emeled');

let kiszamolo = szamEgy ** hatvanyozando;
document.body.innerHTML += 'A hatványra emelt összeg a következő: ' + kiszamolo;

//Task03
let alsoErtek = parseInt(prompt('Add meg az alsó értéket:'));
let felsoErtek = parseInt(prompt('Add meg a felső értéket:'));

function generator() {
    let parosSzam = Math.floor(Math.random() * (felsoErtek - alsoErtek + 1)) + alsoErtek;
    if (parosSzam % 2 === 0) {
        document.body.innerHTML += 'A generált random szám a következő: ' + parosSzam;
    } else if (parosSzam !== felsoErtek) {
        document.body.innerHTML += `A generált random szám a következő: ${parosSzam + 1}`;
    } else {
        document.body.innerHTML += `A generált random szám a következő: ${parosSzam - 1}`;
    }
}

document.body.innerHTML += 'A hatványra emelt összeg a következő: ';
generator();
//Task04
let kor = prompt('Add meg a korod')

function eletKor() {
    if (kor >= 0 && kor <= 6) {
        alert('Kisgyermekkor')
    }
    else if (kor > 6 && kor <= 12) {
        alert('Gyermekkor')
    }
    else if (kor > 12 && kor <= 16) {
        alert('Serdülőkor')
    }
    else if (kor > 16 && kor <= 20) {
        alert('Ifjúkor')
    }
    else if (kor > 20 && kor <= 30) {
        alert('Fiatal felnőtt kor')
    }
    else if (kor > 30 && kor <= 60) {
        alert('Felnőtt kor')
    }
    else if (kor > 60 && kor <= 120) {
        alert('Aggkor')
    }
    else {
        alert('Hiba');
    }
}
eletKor();

//Task05
function osztoEllenorzo(szam, oszto) {
    if (szam % oszto === 0) {
        return szam + ' osztja a(z) ' + oszto + '-t maradék nélkül.';
    } else {
        return szam + ' nem osztja maradék nélkül a(z) ' + oszto + '-t.';
    }
}

let szam = parseInt(prompt('Kérlek, add meg a számot:'));
let oszto = parseInt(prompt('Kérlek, add meg az osztót:'));

if (isNaN(szam) || isNaN(oszto)) {
    alert('Hibás bemenet. Kérlek, csak számokat adj meg.');
} else {
    let eredmeny = osztoEllenorzo(szam, oszto);
    alert(eredmeny);
}

//task06
for (let i = 1; i < 10; i++)(
    document.body.innerHTML += (i * i) + '<br>');