import IPickaxe from './../interfaces/pickaxe';
import IMiningSpeed from './../interfaces/mining-speed';
import IMine from './../interfaces/mine';
import IOre from './../interfaces/ore';
export default class Pickaxe implements IPickaxe {
    constructor(name: string, miningSpeed: IMiningSpeed);
    private name;
    private miningSpeed;
    private miningProcess;
    private alreadyEquipped;
    /**
     * Start mining and calling callback every timestamp defined in
     * mining speed. Callback takes in parameters mineEnd that tells
     * if the mine is out of ore and ore, which contains
     * mined ore type and amount
     */
    startMining(mine: IMine, cb: (mineEnd: boolean, ore: IOre) => void): void;
    stopMining(): void;
    isMiningActive(): boolean;
    equip(): boolean;
    unequip(): void;
}
