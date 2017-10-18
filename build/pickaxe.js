"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ore_1 = require("./ore");
class Pickaxe {
    constructor(name, miningSpeed) {
        this.name = name;
        this.miningSpeed = miningSpeed;
        this.miningProcess = 0;
        this.alreadyEquipped = false;
    }
    /**
     * Start mining and calling callback every timestamp defined in
     * mining speed. Callback takes in parameters mineEnd that tells
     * if the mine is out of ore and ore, which contains
     * mined ore type and amount
     */
    startMining(mine, cb) {
        if (this.miningProcess)
            throw new Error("One mining is in process, cannot start next");
        if (mine.remaining <= 0)
            return cb(true, new ore_1.default(mine.oreType, 0));
        this.miningProcess = setInterval(() => {
            let mined = mine.mineOre(this.miningSpeed.oreAmount);
            if (mine.remaining <= 0) {
                cb(true, new ore_1.default(mine.oreType, mined));
                clearInterval(this.miningProcess);
                return;
            }
            cb(false, new ore_1.default(mine.oreType, mined));
        }, this.miningSpeed.timestamp);
    }
    stopMining() {
        if (this.miningProcess)
            clearInterval(this.miningProcess);
    }
    isMiningActive() {
        return this.miningProcess != 0;
    }
    equip() {
        if (this.alreadyEquipped)
            return false;
        else {
            this.alreadyEquipped = true;
            return true;
        }
    }
    unequip() {
        this.alreadyEquipped = false;
    }
}
exports.default = Pickaxe;
