import IMiner from './../interfaces/miner';
import IOreEquipment from './../interfaces/ore-equipment';
import Eq from './eq';
import IPickaxe from './../interfaces/pickaxe';
import IMine from './../interfaces/mine';
import IOre from './../interfaces/ore';

export default class Miner implements IMiner {
    constructor(name : string) {
        this.equipment = new Eq();
        this.miningProcess = false;
        this.name = name;
    }

    private pickaxe : IPickaxe;
    private equipment : IOreEquipment;
    private miningProcess : boolean;
    private name : string;

    /**
     * Equipo pickaxo and returno pickaxo currently in use'o if it was equippedo
     * @param pickaxe pickaxe to equip LOL
     */
    public equip(pickaxe : IPickaxe) : IPickaxe | undefined {
        if(pickaxe.equip()) {
            let lastPickaxe = (this.pickaxe) ? this.pickaxe : undefined;
            if(lastPickaxe)
                lastPickaxe.unequip();
            this.pickaxe = pickaxe;
            return lastPickaxe;
        }
        else throw new Error("This pickaxe is already equipped with someone else");
    }

    /**
     * Start mining, invokes callback when ends
     * @param mine mine to mine XDDD
     * @param cb callback called after mining job is finished
     * @param pickCb invokes every pickaxe callback
     */
    public startMining(mine : IMine, cb: () => void, pickCb ?: (mine : IMine, minedOre : IOre) => void) {
        if(this.miningProcess)
            throw new Error("MINER IS ALREADY MINING SOMETHING!!! FIRST STOP MINING");
        try {
            if(this.pickaxe) {
                this.miningProcess = true;
                this.pickaxe.startMining(mine, (mineEnd, minedOre) => {
                    if(pickCb)
                        pickCb(mine, minedOre);
                    this.equipment.addOre(minedOre);
                    if(mineEnd) {
                        this.miningProcess = false;
                        return cb();
                    }
                });
            }
            else
                throw new Error("You have no pickaxe XDDDD");
        }
        catch(e) {
            this.miningProcess = false;
            throw new Error("Pickaxe error: " + e);
        }
    }
    /**
     * Stop mining, if called callback in startMining won't be invoked!!!!!
     */
    public stopMining() {
        this.pickaxe.stopMining();
        this.miningProcess = false;
    }
    public getEq() {
        return this.equipment;
    }
}
