"use strict";
const miner_1 = require("./miner");
const pickaxe_1 = require("./pickaxe");
const mining_speed_1 = require("./mining-speed");
const mine_1 = require("./mine");
module.exports = class ExampleRun {
    static run() {
        let steve = new miner_1.default("Steve");
        let andrzej = new miner_1.default("Andrzej");
        let ultaFuckinDiamondPickaxe = new pickaxe_1.default("Super kurwa zajebisty diamentowy kilof", new mining_speed_1.default(100, 5000));
        let woodenPickaxe = new pickaxe_1.default("Chujowy drewniany kilof", new mining_speed_1.default(5, 1000));
        let goldMine = new mine_1.default("gold", 2137);
        let silverMine = new mine_1.default("silver", 400);
        let uraniumMine = new mine_1.default("uranium", 45000);
        steve.equip(ultaFuckinDiamondPickaxe);
        /*steve.startMining(goldMine, () => {
            console.log(steve.getEq().getOreList()[0]);
        }, (mine, minedOre) => {
            console.log(`[${new Date().toLocaleTimeString()}]<Miner Steve>: Mined ${minedOre.amount} of ${minedOre.type} ore.
            ${mine.remaining} remaining ore in mine`);
        });*/
        andrzej.equip(woodenPickaxe);
        andrzej.startMining(uraniumMine, () => {
            console.log("Andrzej skończył kurde kopanie.");
        }, (mine, minedOre) => {
            console.log(`[${new Date().toLocaleTimeString()}]<Miner Steve>: Mined ${minedOre.amount} of ${minedOre.type} ore. | ${mine.remaining} remaining ore in mine`);
        });
    }
};
