export default class Mine {
    public constructor(ore : string, resourceAmount : number) {
        this.ore = ore;
        this.resourceAmount = resourceAmount;
    }
    private ore : string;
    private resourceAmount : number;
    
    public get oreType() : string {
        return this.ore;
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