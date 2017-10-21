import IMiningSpeed from './../interfaces/mining-speed';
export default class MiningSpeed implements IMiningSpeed {
    constructor(oreAmount: number, timestamp: number);
    oreAmount: number;
    timestamp: number;
}
