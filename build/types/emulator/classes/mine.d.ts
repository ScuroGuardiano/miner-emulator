import IMine from './../interfaces/mine';
export default class Mine implements IMine {
    constructor(oreType: string, resourceAmount: number);
    private _oreType;
    private resourceAmount;
    readonly oreType: string;
    readonly remaining: number;
    mineOre(amount: number): number;
}
