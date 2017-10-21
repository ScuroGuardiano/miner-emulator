"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MineField {
    constructor(mine) {
        this._fieldType = "mine-field";
        this._mine = mine;
    }
    getFieldType() {
        return this._fieldType;
    }
    canMinerStandOnIt() {
        return true;
    }
    getMine() {
        return this._mine;
    }
}
exports.default = MineField;
