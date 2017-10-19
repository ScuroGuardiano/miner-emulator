import Miner from './classes/miner';
import Pickaxe from './classes/pickaxe';
import MiningSpeed from './classes/mining-speed';
import Mine from './classes/mine';
import Eq from './classes/eq';
import Ore from './classes/ore';

import IBasicOre from './interfaces/basic-ore';
import IMine from './interfaces/mine';
import IMiner from './interfaces/miner';
import IMiningSpeed from './interfaces/mining-speed';
import IOreEquipment from './interfaces/ore-equipment';
import IOre from './interfaces/ore';
import IPickaxe from './interfaces/pickaxe';

class MinerEmulatorTypes {
    static Pickaxe = Pickaxe;
    static MiningSpeed = MiningSpeed;
    static Mine = Mine;
    static Eq = Eq;
    static Ore = Ore;
    static Miner = Miner;
}

export = class MinerEmulator extends MinerEmulatorTypes {
    static exampleRun() {
        let steve = new MinerEmulator.Miner("Steve");
        let andrzej = new MinerEmulator.Miner("Andrzej");

        let ultaFuckinDiamondPickaxe = new MinerEmulator.Pickaxe("Super kurwa zajebisty diamentowy kilof",
                                                new MinerEmulator.MiningSpeed(100, 5000));
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
}
