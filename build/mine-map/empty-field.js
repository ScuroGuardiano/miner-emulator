"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class EmptyField {
    constructor() {
        this._fieldType = "empty-field";
    }
    ;
    getFieldType() {
        return this._fieldType;
    }
    canMinerStandOnIt() {
        return true;
    }
}
exports.default = EmptyField;
