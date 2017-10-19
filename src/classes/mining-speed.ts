import IMiningSpeed from './../interfaces/mining-speed';

export default class MiningSpeed implements IMiningSpeed {
    constructor(oreAmount : number, timestamp: number) {
        this.oreAmount = oreAmount;
        this.timestamp = timestamp;
    }
    public oreAmount : number;
    public timestamp : number;
}
