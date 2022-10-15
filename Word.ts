export class Word {
    private name: string;
    private definition: string[];
    private gramFunction: string[];
    private synonymous: string[];
    private antonyms: string[];

    public constructor(paramName: string, paramDefinition: string[], paramGramFunction: string[], paramSynonymous: string[], paramAntonyms: string[]) {
        this.name = paramName;
        this.definition = paramDefinition;
        this.gramFunction = paramGramFunction;
        this.synonymous = paramSynonymous;
        this.antonyms = paramAntonyms;
    }

    public setName(paramName: string): void {
        this.name = paramName;
    }

    public getName(): string {
        return this.name;
    }

    public addDef(paramDef: string): void {
        this.definition.push(paramDef);
    }

    public getDef(): string[] {
        return this.definition;
    }
    public addSynonymous(paramSynonymous: string): void {
        this.synonymous.push(paramSynonymous); 
    }
    public getSynonymous(): string[] {
        return this.synonymous;
    }

    public addAntonyms(paramAntonyms: string) {
        this.antonyms.push(paramAntonyms);
    }

    public getAntonyms(): string[] {
        return this.antonyms;
    }

    public addGramFunction(paramGramFunction: string): void {
        this.gramFunction.push(paramGramFunction);
    }

    public getGramFunction(): string[] {
        return this.gramFunction;
    }

}

//problema de entrada y salida de arrays vacios al crear el objeto, como resolverlo?