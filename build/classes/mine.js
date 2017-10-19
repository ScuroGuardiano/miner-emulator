"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Mine {
    constructor(oreType, resourceAmount) {
        this._oreType = oreType;
        this.resourceAmount = resourceAmount;
    }
    get oreType() {
        return this._oreType;
    }
    get remaining() {
        return this.resourceAmount;
    }
    mineOre(amount) {
        if (this.resourceAmount <= amount) {
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
exports.default = Mine;
