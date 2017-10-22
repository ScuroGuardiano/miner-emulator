"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ObstacleField {
    constructor() {
        this._fieldType = "obstacle-field";
    }
    getFieldType() {
        return this._fieldType;
    }
    canMinerStandOnIt() {
        return false;
    }
}
exports.default = ObstacleField;
