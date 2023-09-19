function EkezetesBetukSzama (vizsgaltSzoveg:string):number{
let ekezetesBetuk:string[]=["á","é","í","ó","ö","ő", "ú", "ü", "ű", "Á", "É", "Í", "Ó", "Ö", "Ő","Ú", "Ü", "Ű"];
let szamlalo:number=0;
for (let i:number=0; i<vizsgaltSzoveg.length; i++){
for(let j:number=0; j<ekezetesBetuk.length;j++){
    if(vizsgaltSzoveg[i]==ekezetesBetuk[j]){
    szamlalo++
}
}
}
return szamlalo
} 


function ElsoNszamSzorzat(mennyiseg:number):number{
    let eredmeny:number=1;
    for(let i=1;i<=mennyiseg;i++){
        eredmeny*=i;
    }
    return eredmeny;

}

function  ParosakOsszege(vizsgaltTomb:number[]):number {
let parosakSzama:number=0;
for (let i:number=0; i<vizsgaltTomb.length; i++){
    if(vizsgaltTomb[i]%2===0){
        parosakSzama+=vizsgaltTomb[i];
    }
}
return parosakSzama
}
