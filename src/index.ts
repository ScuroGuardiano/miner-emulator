import Miner from './miner';
import Pickaxe from './pickaxe';
import MiningSpeed from './mining-speed';
import Mine from './mine';

export = class ExampleRun {
    static run() {
        let steve = new Miner("Steve");
        let andrzej = new Miner("Andrzej");

        let ultaFuckinDiamondPickaxe = new Pickaxe("Super kurwa zajebisty diamentowy kilof", 
                                                new MiningSpeed(100, 5000));
        let woodenPickaxe = new Pickaxe("Chujowy drewniany kilof", new MiningSpeed(5, 1000));

        let goldMine = new Mine("gold", 2137);
        let silverMine = new Mine("silver", 400);
        let uraniumMine = new Mine("uranium", 45000);

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
}