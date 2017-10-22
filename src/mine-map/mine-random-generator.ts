import Mine from './../emulator/classes/mine';

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

export default class MineRandomGenerator {
    static generateMine() {
        let mineTypeIndex = Math.floor(Math.random() * minesTypes.length);
        let oreAmount = Math.floor(Math.random() * 10000) + 500;
        return new Mine(minesTypes[mineTypeIndex], oreAmount);
    }
}