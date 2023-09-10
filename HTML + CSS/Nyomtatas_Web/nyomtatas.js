function kalkulal() {
    //Űrlapadatok
    const szelesseg = 297;
    const magassag = 420;
    const papir = document.getElementById('papirtipus').value;
    //Számítások
    let terulet = Math.round((szelesseg * magassag) / 10000);
    let koltseg = terulet * papir;
    document.getElementById("terulet").innerHTML = terulet;
    document.getElementById("papir").innerHTML = papir;
    document.getElementById("koltseg").innerHTML = koltseg;
    //Megjelenítés
    document.getElementById('valasz').style.visibility = "visible";

}

