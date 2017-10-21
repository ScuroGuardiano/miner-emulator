"use strict";
const miner_1 = require("./classes/miner");
const pickaxe_1 = require("./classes/pickaxe");
const mining_speed_1 = require("./classes/mining-speed");
const mine_1 = require("./classes/mine");
const eq_1 = require("./classes/eq");
const ore_1 = require("./classes/ore");
class MinerEmulatorTypes {
}
MinerEmulatorTypes.Pickaxe = pickaxe_1.default;
MinerEmulatorTypes.MiningSpeed = mining_speed_1.default;
MinerEmulatorTypes.Mine = mine_1.default;
MinerEmulatorTypes.Eq = eq_1.default;
MinerEmulatorTypes.Ore = ore_1.default;
MinerEmulatorTypes.Miner = miner_1.default;
module.exports = class MinerEmulator extends MinerEmulatorTypes {
    static exampleRun() {
        let steve = new MinerEmulator.Miner("Steve");
        let andrzej = new MinerEmulator.Miner("Andrzej");
        let ultaFuckinDiamondPickaxe = new MinerEmulator.Pickaxe("Super kurwa zajebisty diamentowy kilof", new MinerEmulator.MiningSpeed(100, 5000));
        let woodenPickaxe = new MinerEmulator.Pickaxe("Chujowy drewniany kilof", new MinerEmulator.MiningSpeed(5, 1000));
        let goldMine = new MinerEmulator.Mine("gold", 2137);
        let silverMine = new MinerEmulator.Mine("silver", 400);
        let uraniumMine = new MinerEmulator.Mine("uranium", 45000);
        steve.equip(ultaFuckinDiamondPickaxe);
        steve.startMining(goldMine, () => {
            console.log(steve.getEq().getOreList()[0]);
        }, (mine, minedOre) => {
            console.log(`[${new Date().toLocaleTimeString()}]<Miner Steve>: Mined ${minedOre.amount} of ${minedOre.type} ore.
            ${mine.remaining} remaining ore in mine`);
        });
        andrzej.equip(woodenPickaxe);
        andrzej.startMining(uraniumMine, () => {
            console.log("Andrzej skończył kurde kopanie.");
        }, (mine, minedOre) => {
            console.log(`[${new Date().toLocaleTimeString()}]<Miner Andrzej>: Mined ${minedOre.amount} of ${minedOre.type} ore. | ${mine.remaining} remaining ore in mine`);
        });
    }
};
