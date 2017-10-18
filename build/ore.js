"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Ore {
    constructor(type, amount) {
        this._type = type;
        this._amount = amount;
    }
    get amount() {
        return this._amount;
    }
    get type() {
        return this._type;
    }
    addOre(ore) {
        if (this.type != ore.type)
            throw (new Error(`Cannot add ore ${ore.type} to type ${this.type}!`));
        this._amount += ore.amount;
    }
}
exports.default = Ore;
