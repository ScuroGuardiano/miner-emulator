"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MineMap {
    constructor(sizeX, sizeY) {
        this.size = { x: sizeX, y: sizeY };
        Object.freeze(this.size);
        this.fields = [];
        for (let i = 0; i < this.size.x; i++) {
            this.fields.push([]);
        }
    }
    getField(x, y) {
        if (x < this.size.x && y < this.size.y) {
            return this.fields[x][y];
        }
        else
            throw new RangeError("Error, you're trying to get field that is out of map!!!");
    }
    setField(x, y, field) {
        if (x < this.size.x && y < this.size.y) {
            this.fields[x][y] = field;
        }
        else
            throw new RangeError("Error, you're trying to set field out of map!!!");
    }
    getMapSize() {
        return this.size;
    }
}
exports.default = MineMap;
