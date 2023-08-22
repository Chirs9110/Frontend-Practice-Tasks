
// Task1 SzerkeszthetoHaromszogFuggveny()
function triangle() {
    let a = Number(prompt("Add meg a(z) [a] oldal méretét"));
    let b = Number(prompt("Add meg a(z) [b] oldal méretét"));
    let c = Number(prompt("Add meg a(z) [c] oldal méretét"));

    if (a + b > c && b + c > a && a + c > b) {

        document.write(`A ${a}, ${b}, ${c} oldalú háromszög megszerkeszthető`);
    }
    else {
        document.write(`A ${a}, ${b}, ${c} oldalú háromszög NEM megszerkeszthető`);
    }
}
(triangle());


// Task2 randomTombFuggveny()
function randomTomb() {
    let tomb = [];
    for (let i = 0; i < 10; i++) {
        tomb.push(Math.round(Math.random() * 100));
    }
    document.write("<b>A random tömb elemei:</b> ");
    for (let i = 0; i < tomb.length; i++) {
        document.write(tomb[i] + " ")
    }
}
randomTomb();

// Task3 randomGeneraltSzamFuggveny()
function generaltSzam() {
    let generaltSzam = Math.round((Math.random() * 20) - 10);
    if (generaltSzam > 0) {
        document.write(`A ${generaltSzam}: <b>pozitív`);
    }
    else if (generaltSzam < 0) {
        document.write(`A ${generaltSzam}: <b>negatív`);
    }
    else {
        document.write(`A ${generaltSzam}: <b>nulla`);
    }
}
generaltSzam();

// Task4 erdemJegyekIfElseFuggveny()
function jegy(){
    let jegy=prompt("Add meg a kapott osztályzatod")
    
    if (jegy==5){
    document.write(`<b>Példás`)
    }
    else if (jegy==4){
    document.write(`<b>Jó`)
    }
    else if (jegy==3){
    document.write(`<b>Változó`)
    }
    else if (jegy==2){
    document.write(`<b>Hanyag`)
    }
    else{
    document.write(`<b>Hibás adat`)
    }
    }
    jegy();

    // Task4/a erdemJegyekSwitchCaseFuggveny()
    