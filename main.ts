import { Dictionary } from "./Dictionary";
import { Word } from "./Word";
import { asignacion } from "./funcionCopiarDB";

//tomo mis palabras armadas del archivos json
const misPalabras: Word[] = [];
asignacion(misPalabras);

let palabraNueva: Word = new Word("perro",["mamífero doméstico de la familia de los cánidos, de tamaño, forma y pelaje muy diversos, según las razas, que tiene olfato muy fino y es inteligente y muy leal a su dueño"],["sustantivo"],["can","chucho","tuso","cachorro"],[])


//programa principal
let miDiccionario: Dictionary = new Dictionary(misPalabras);
