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

        //calculamos valor absoluto, la distancia entre 2 puntos
        let distance: number = Math.abs (limit1 - limit2);
        //tomamos el resultado y lo utilizamos para crear el array de salida
        let arrayBetween: Word[] = [];

        for(let i = menor; i < mayor ; i++) {
            arrayBetween.push(this.words[i]);
        }

        return arrayBetween;

    }

    public searchWord(paramName: string): Word {
        for(let i = 0; i < this.words.length ; i++) {
            if(paramName.toUpperCase() === this.words[i].getName().toUpperCase()) {
                return this.words[i];
            }
        }

        throw new Error ("No se encontro la palabra");
    }

    private returnIndex(paramName: string): number {
        for(let i = 0; i < this.words.length ; i++) {
            if(paramName.toUpperCase() === this.words[i].getName().toUpperCase()) {
                return i;
            }
        }

        throw new Error ("No se encontro la palabra");
    }

}