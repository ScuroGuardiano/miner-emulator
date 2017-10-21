import IOre from './../interfaces/ore';
export default class Ore implements IOre {
    constructor(type: string, amount: number);
    private _amount;
    private _type;
    readonly amount: number;
    readonly type: string;
    addOre(ore: IOre): void;
}
