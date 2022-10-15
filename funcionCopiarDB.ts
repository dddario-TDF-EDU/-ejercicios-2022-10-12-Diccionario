import { Word } from "./Word";
const myData = require("./baseDeDatos.json");


export function asignacion(parramArray) {
    for(let i:number = 0; i < myData.length; i++) {
        parramArray[i] = new Word (myData[i].name, myData[i].definition, myData[i].gramFunction, myData[i].synonymous, myData[i].antonyms);
    }
}
