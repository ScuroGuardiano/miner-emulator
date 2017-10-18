"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Eq {
    constructor() {
        this.ores = new Map();
    }
    addOre(ore) {
        if (this.ores.has(ore.type))
            this.ores.get(ore.type).addOre(ore);
        else
            this.ores.set(ore.type, ore);
    }
    getOre(type) {
        if (this.ores.has(type))
            return this.ores.get(type);
        else
            return undefined;
    }
    getOreList() {
        let list = [];
        this.ores.forEach(v => list.push({ type: v.type, amount: v.amount }));
        return list;
    }
}
exports.default = Eq;
