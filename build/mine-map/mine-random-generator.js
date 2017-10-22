"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mine_1 = require("./../emulator/classes/mine");
const minesTypes = [
    "gold",
    "silver",
    "iron",
    "uranium",
    "diamond",
    "nickel",
    "titanium",
    "copper"
];
class MineRandomGenerator {
    static generateMine() {
        let mineTypeIndex = Math.floor(Math.random() * minesTypes.length);
        let oreAmount = Math.floor(Math.random() * 10000) + 500;
        return new mine_1.default(minesTypes[mineTypeIndex], oreAmount);
    }
}
exports.default = MineRandomGenerator;
