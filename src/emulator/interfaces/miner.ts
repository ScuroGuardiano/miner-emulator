import Ore from './ore';
import Mine from './mine';

export default interface Miner {
    startMining : (mine : Mine, onEnd : () => void, onEveryMiningCycle ?: (mine : Mine, minedOre : Ore) => void) => void;
    stopMining : () => void;
}
