import IMine from './../interfaces/mine';

export default class Mine implements IMine {
    public constructor(oreType : string, resourceAmount : number) {
        this._oreType = oreType;
        this.resourceAmount = resourceAmount;
    }
    private _oreType : string;
    private resourceAmount : number;

    public get oreType() : string {
        return this._oreType;
    }
    public get remaining() : number {
        return this.resourceAmount;
    }
    public mineOre(amount : number) : number {
        if(this.resourceAmount <= amount) {
            let resource = this.resourceAmount;
            this.resourceAmount = 0;
            return resource;
        }
        else {
            this.resourceAmount -= amount;
            return amount;
        }
    }
}
