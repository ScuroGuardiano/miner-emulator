"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const eq_1 = require("./eq");
class Miner {
    constructor(name) {
        this.equipment = new eq_1.default();
        this.miningProcess = false;
        this.name = name;
    }
    /**
     * Equipo pickaxo and returno pickaxo currently in use'o if it was equippedo
     * @param pickaxe pickaxe to equip LOL
     */
    equip(pickaxe) {
        if (pickaxe.equip()) {
            let lastPickaxe = (this.pickaxe) ? this.pickaxe : undefined;
            if (lastPickaxe)
                lastPickaxe.unequip();
            this.pickaxe = pickaxe;
            return lastPickaxe;
        }
        else
            throw new Error("This pickaxe is already equipped with someone else");
    }
    /**
     * Start mining, invokes callback when ends
     * @param mine mine to mine XDDD
     * @param cb callback called after mining job is finished
     * @param pickCb invokes every pickaxe callback
     */
    startMining(mine, cb, pickCb) {
        if (this.miningProcess)
            throw new Error("MINER IS ALREADY MINING SOMETHING!!! FIRST STOP MINING");
        try {
            if (this.pickaxe) {
                this.miningProcess = true;
                this.pickaxe.startMining(mine, (mineEnd, minedOre) => {
                    if (pickCb)
                        pickCb(mine, minedOre);
                    this.equipment.addOre(minedOre);
                    if (mineEnd) {
                        this.miningProcess = false;
                        return cb();
                    }
                });
            }
            else
                throw new Error("You have no pickaxe XDDDD");
        }
        catch (e) {
            this.miningProcess = false;
            throw new Error("Pickaxe error: " + e);
        }
    }
    /**
     * Stop mining, if called callback in startMining won't be invoked!!!!!
     */
    stopMining() {
        this.pickaxe.stopMining();
        this.miningProcess = false;
    }
    getEq() {
        return this.equipment;
    }
}
exports.default = Miner;
