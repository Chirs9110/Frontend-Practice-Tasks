"use strict";
function EkezetesBetukSzama(vizsgaltSzoveg) {
    let ekezetesBetuk = ["á", "é", "í", "ó", "ö", "ő", "ú", "ü", "ű", "Á", "É", "Í", "Ó", "Ö", "Ő", "Ú", "Ü", "Ű"];
    let szamlalo = 0;
    for (let i = 0; i < vizsgaltSzoveg.length; i++) {
        for (let j = 0; j < ekezetesBetuk.length; j++) {
            if (vizsgaltSzoveg[i] == ekezetesBetuk[j]) {
                szamlalo++;
            }
        }
    }
    return szamlalo;
}
function ElsoNszamSzorzat(mennyiseg) {
    let eredmeny = 1;
    for (let i = 1; i <= mennyiseg; i++) {
        eredmeny *= i;
    }
    return eredmeny;
}
function ParosakOsszege(vizsgaltTomb) {
    let parosakSzama = 0;
    for (let i = 0; i < vizsgaltTomb.length; i++) {
        if (vizsgaltTomb[i] % 2 === 0) {
            parosakSzama += vizsgaltTomb[i];
        }
    }
    return parosakSzama;
}
