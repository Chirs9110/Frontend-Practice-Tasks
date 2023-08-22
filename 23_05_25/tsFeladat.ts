var modositandoSzoveg: string = 'Példaszöveg ami tartalmaz ékezetes karaktereket';

// Task 1
function EkezetesBetukSzama(modositandoSzoveg: string): number {
    let EkezetesKarakterek: string[] = ['á', 'é', 'í', 'ó', 'ö', 'ő', 'ú', 'ü', 'ű', 'Á', 'É', 'Í', 'Ó', 'Ö', 'Ő', 'Ú', 'Ü', 'Ű'];
    let ekezetesSzamlalo = 0;
    for (let i: number = 0; i < modositandoSzoveg.length; i++) {
        if (EkezetesKarakterek.includes(modositandoSzoveg[i])) {
            ekezetesSzamlalo++;
        }
    }
    return ekezetesSzamlalo;
}

function tesztEkezetesBetukSzama() {
    try {
        let eredmeny = EkezetesBetukSzama(modositandoSzoveg);
        let elvartEredmeny: number = 3;
        if (eredmeny === elvartEredmeny) {
            document.body.innerHTML += ("<br>Sikeresen elvégzett feladat ✅");
        }
        else {
            document.body.innerHTML += "<br>Feladat gatya⛔!";
        }
    } catch {
        document.body.innerHTML += ("<br>Feladat gatya⛔!");
    }
}



tesztEkezetesBetukSzama();

// Task 2
function camelCaseGenerator(modositandoSzoveg: string): string {
    let szavak: string[] = modositandoSzoveg.split(' ');
    let camelCaseSzoveg: string = szavak[0].toLowerCase();
    for (let i = 1; i < szavak.length; i++) {
        let szo: string = szavak[i];
        let elsoBetuNagy: string = szo.charAt(0).toUpperCase() + szo.slice(1);
        camelCaseSzoveg += elsoBetuNagy;
    }
    return camelCaseSzoveg;
}

function tesztCamelCaseGenerator() {
    try {
        let eredmeny = camelCaseGenerator(modositandoSzoveg);
        let elvartEredmeny: string = "példaszövegAmiTartalmazÉkezetesKaraktereket";
        if (eredmeny === elvartEredmeny) {
            document.body.innerHTML += ("<br>Sikeresen elvégzett feladat ✅");
        }
        else {
            document.body.innerHTML += "<br>Feladat gatya⛔!";
        }
    } catch {
        document.body.innerHTML += ("<br>Feladat gatya⛔!");
    }
}
tesztCamelCaseGenerator();



