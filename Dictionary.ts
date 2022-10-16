import { Word } from "./Word"

export class Dictionary {
    private words: Word[];

    public constructor(paramWords: Word[]) {
        this.words = paramWords;
    }

    public addWord(paramWord: Word): void {
        this.words.push(paramWord);
    }

    public removeWord(index: number): void {
        this.words.slice(1, index);
    }


//REVISAR MUCHO ESTO    
    public betweenWords(paramName1: string, paramName2: string): Word[] {
        let limit1: number = this.returnIndex(paramName1);
        let limit2: number = this.returnIndex(paramName2);
        let menor: number;
        let mayor: number;
        if(limit1>limit2) {
            menor = limit2;
            mayor = limit1;
        } else {
            menor = limit1;
            mayor = limit2;
        }
        //tomamos el resultado y lo utilizamos para crear el array de salida
        let arrayBetween: Word[] = [];
        for(let i = menor+1; i < mayor ; i++) {
            arrayBetween.push(this.words[i]);
        }
        return arrayBetween;
    }

    public searchWord(paramName: string): Word {
        let palabraEncontrada: Word = new Word("",[""],[""],[""],[""]);
        for(let i = 0; i < this.words.length ; i++) {
            if(paramName.toUpperCase() === this.words[i].getName().toUpperCase()) {
                palabraEncontrada = this.words[i]; 
                return palabraEncontrada;
            }
        }
        return palabraEncontrada;
    }

    private returnIndex(paramName: string): number {
        for(let i = 0; i < this.words.length ; i++) {
            if(paramName.toUpperCase() === this.words[i].getName().toUpperCase()) {
                return i;
            }
        }
        //Falta encontrar la forma en que una palabra no exista y poder reconocerla
        throw new Error ("No se encontro la palabra");
    }
    
    public ordenar(): void {
        for (let j = 0; j < this.words.length-1; j++) {
            if (this.words[j].getName().toUpperCase() > this.words[j + 1].getName().toUpperCase()) {
                let aux = this.words[j+1]
                this.words[j+1] = this.words[j]
                this.words[j] = aux;
                
            }
        }
    }

    public getWords(): string[] {
        let palabrasContenidas: string[] = [];
        let nuevaPalabra: string = "";
        for (let j = 0; j < this.words.length; j++) {
            nuevaPalabra = this.words[j].getName();
            palabrasContenidas.push(nuevaPalabra);
        }
        return palabrasContenidas;
    }
}