import { Word } from "./Word";
const myData = require("./baseDeDatos.json");


export function asignacion(parramArray): void {
    for(let i:number = 0; i < myData.length; i++) {
        parramArray[i] = new Word (myData[i].name, devolverArrayDefinicion(myData[i].definition), devolverArraySinComas(myData[i].gramFunction), devolverArraySinComas(myData[i].synonymous), devolverArraySinComas(myData[i].antonyms));
    }
}

function devolverArrayDefinicion(parramArray: string): string[] {
    let def: string = ""
    let i: number = 0;
    let arrayDefiniciones: string[] = []
    while(parramArray[i] !=  "\"" && i < parramArray.length) {
        def+= parramArray[i]; 
        if (parramArray[i+1] === "\"") {
            if(def != ",") {
                arrayDefiniciones.push(def);
            }
            def = "";
            i++;
        }
        i++;
    }
    if(def != ",") {
        arrayDefiniciones.push(def);
    }
    return arrayDefiniciones;    
}

function devolverArraySinComas(parramArray: string): string[] {
    let arrayString: string[] = [];
    let palabra: string = "";
    for(let i = 0; i < parramArray.length; i++) {
        if(parramArray[i] != ","){
            palabra+= parramArray[i];
        } else {
            arrayString.push(palabra);
            palabra = "";
        }        
    }
    return arrayString;
}
