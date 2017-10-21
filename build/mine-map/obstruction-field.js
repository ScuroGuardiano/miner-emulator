"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ObstructionField {
    constructor() {
        this._fieldType = "obstruction-field";
    }
    getFieldType() {
        return this._fieldType;
    }
    canMinerStandOnIt() {
        return false;
    }
}
exports.default = ObstructionField;
