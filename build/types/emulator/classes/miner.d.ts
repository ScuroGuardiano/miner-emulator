import IMiner from './../interfaces/miner';
import IOreEquipment from './../interfaces/ore-equipment';
import IPickaxe from './../interfaces/pickaxe';
import IMine from './../interfaces/mine';
import IOre from './../interfaces/ore';
export default class Miner implements IMiner {
    constructor(name: string);
    private pickaxe;
    private equipment;
    private miningProcess;
    private name;
    /**
     * Equipo pickaxo and returno pickaxo currently in use'o if it was equippedo
     * @param pickaxe pickaxe to equip LOL
     */
    equip(pickaxe: IPickaxe): IPickaxe | undefined;
    /**
     * Start mining, invokes callback when ends
     * @param mine mine to mine XDDD
     * @param cb callback called after mining job is finished
     * @param pickCb invokes every pickaxe callback
     */
    startMining(mine: IMine, cb: () => void, pickCb?: (mine: IMine, minedOre: IOre) => void): void;
    /**
     * Stop mining, if called callback in startMining won't be invoked!!!!!
     */
    stopMining(): void;
    getEq(): IOreEquipment;
}
