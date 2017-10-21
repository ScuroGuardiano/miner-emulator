"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TreeField {
    constructor() {
        this._fieldType = "tree-field";
    }
    getFieldType() {
        return this._fieldType;
    }
    canMinerStandOnIt() {
        return false;
    }
}
exports.default = TreeField;
