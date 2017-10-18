export default class MiningSpeed {
    constructor(oreAmount : number, timestamp: number) {
        this.oreAmount = oreAmount;
        this.timestamp = timestamp;
    }
    public oreAmount : number;
    public timestamp : number;
}