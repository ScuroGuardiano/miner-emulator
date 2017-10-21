import Ore from './ore';
import Mine from './mine';
export default interface Pickaxe {
    startMining: (mine: Mine, cb: (mineEnd: boolean, ore: Ore) => void) => void;
    stopMining: () => void;
    equip: () => boolean;
    unequip: () => void;
}
