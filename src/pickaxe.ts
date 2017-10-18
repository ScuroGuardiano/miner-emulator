import MiningSpeed from './mining-speed';
import Mine from './mine';
import Ore from './ore';

export default class Pickaxe {
    constructor(name : string, miningSpeed : MiningSpeed) {
        this.name = name;
        this.miningSpeed = miningSpeed;
        this.miningProcess = 0;
        this.alreadyEquipped = false;
    }

    private name : string;
    private miningSpeed : MiningSpeed;
    private miningProcess : number;
    private alreadyEquipped : boolean;

    /**
     * Start mining and calling callback every timestamp defined in
     * mining speed. Callback takes in parameters mineEnd that tells
     * if the mine is out of ore and ore, which contains
     * mined ore type and amount
     */
    public startMining(mine : Mine, cb : (mineEnd : boolean, ore : Ore) => void) {
        if(this.miningProcess)
            throw new Error("One mining is in process, cannot start next");
        if(mine.remaining <= 0)
            return cb(true, new Ore(mine.oreType, 0));
        this.miningProcess = setInterval(() => {
            let mined = mine.mineOre(this.miningSpeed.oreAmount);
            if(mine.remaining <= 0) {
                cb(true, new Ore(mine.oreType, mined));
                clearInterval(this.miningProcess);
                return;
            }
            cb(false, new Ore(mine.oreType, mined));
        }, this.miningSpeed.timestamp);
    }
    public stopMining() {
        if(this.miningProcess)
            clearInterval(this.miningProcess);
    }
    public isMiningActive() : boolean {
        return this.miningProcess != 0;
    }
    public equip() : boolean {
        if(this.alreadyEquipped)
            return false;
        else {
            this.alreadyEquipped = true;
            return true;
        }
    }
    public unequip() {
        this.alreadyEquipped = false;
    }

}