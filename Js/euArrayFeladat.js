
const EuropaiUnio = [{
    orszag: "Ausztria",
    csatlakozas: "1995.01.01"
},
{
    orszag: "Belgium",
    csatlakozas: "1958.01.01"
},
{
    orszag: "Bulgária",
    csatlakozas: "2007.01.01"
},
{
    orszag: "Ciprus",
    csatlakozas: "2004.05.01"
},
{
    orszag: "Csehország",
    csatlakozas: "2004.05.01"
},
{
    orszag: "Dánia",
    csatlakozas: "1973.01.01"
},
{
    orszag: "Egyesült Királyság",
    csatlakozas: "1973.01.01"
},
{
    orszag: "Észtország",
    csatlakozas: "2004.05.01"
},
{
    orszag: "Finnország",
    csatlakozas: "1995.01.01"
},
{
    orszag: "Franciaország",
    csatlakozas: "1958.01.01"
},
{
    orszag: "Görögország",
    csatlakozas: "1981.01.01"
},
{
    orszag: "Hollandia",
    csatlakozas: "1958.01.01"
},
{
    orszag: "Horvátország",
    csatlakozas: "2013.07.01"
},
{
    orszag: "Írország",
    csatlakozas: "1973.01.01"
},
{
    orszag: "Lengyelország",
    csatlakozas: "2004.05.01"
},
{
    orszag: "Lettország",
    csatlakozas: "2004.05.01"
},
{
    orszag: "Litvánia",
    csatlakozas: "2004.05.01"
},
{
    orszag: "Luxemburg",
    csatlakozas: "1958.01.01"
},
{
    orszag: "Magyarország",
    csatlakozas: "2004.05.01"
},
{
    orszag: "Málta",
    csatlakozas: "2004.05.01"
},
{
    orszag: "Németország",
    csatlakozas: "1958.01.01"
},
{
    orszag: "Olaszország",
    csatlakozas: "1958.01.01"
},
{
    orszag: "Portugália",
    csatlakozas: "1986.01.01"
},
{
    orszag: "Románia",
    csatlakozas: "2007.01.01"
},
{
    orszag: "Spanyolország",
    csatlakozas: "1986.01.01"
},
{
    orszag: "Svédország",
    csatlakozas: "1995.01.01"
},
{
    orszag: "Szlovákia",
    csatlakozas: "2004.05.01"
},
{
    orszag: "Szlovénia",
    csatlakozas: "2004.05.01"
}
]


//    1. Hány tagja van az EU-nak?

function euTagok() {
    for (i = 0; i < EuropaiUnio.length; i++);
    document.write("Az EU-ban jelenleg " + EuropaiUnio.length + " tagállam van")
}
euTagok()


//2. Hány ország csatlakozott 2007-ben...Eljárással

function twentyo7() {
    let k7 = 0;
    for (i = 0; i < EuropaiUnio.length; i++) {
        if (EuropaiUnio[i].csatlakozas.startsWith("2007")) {
            k7++;
        }

    }
    document.write("<br>2007-ben összesen " + k7 + " ország csatlakozott az EU-ba")
}

twentyo7()




//Csatlakozott-e magyaroszág az európai únióhoz? Igen/Nem?
function ifJoined() {
    let joined = false;
    for (let i = 0; i < EuropaiUnio.length; i++) {
        if (EuropaiUnio[i].orszag == "Svédország") {
            joined = true;
        }
    }

    switch (joined) {
        case true:
            document.write("<br>has joined to the EU");
            break;
        default:
            document.write("<br>hasn't joined to the EU");
            break;
    }
}
ifJoined()



//Volt-e májusban csatlakozás?
function voltEmajusiCsatlakozo() {
    let majusiCsati = false;
    for (let i = 0; i < EuropaiUnio.length; i++) {
        if (EuropaiUnio[i].csatlakozas.includes(".05.")) {
            majusiCsati = true;
        }
    }
    switch (majusiCsati) {
        case true:
            document.write("<br>has joined to the EU");
            break;
        default:
            document.write("<br>hasn't joined to the EU");
            break;
    }
}
voltEmajusiCsatlakozo()
