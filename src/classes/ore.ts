import IOre from './../interfaces/ore';

export default class Ore implements IOre {
    constructor(type : string, amount : number) {
        this._type = type;
        this._amount = amount;
    }

    private _amount : number;
    private _type : string;

    public get amount() : number {
        return this._amount;
    }
    public get type() : string {
        return this._type;
    }
    public addOre(ore : IOre) {
        if(this.type != ore.type)
            throw(new Error(`Cannot add ore ${ore.type} to type ${this.type}!`));
        this._amount += ore.amount;
    }
}
