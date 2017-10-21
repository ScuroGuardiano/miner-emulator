import Ore from './ore';
import BasicOre from './basic-ore';
export default interface OreEquipment {
    addOre: (ore: Ore) => void;
    getOre: (type: string) => Ore | undefined;
    getOreList: () => BasicOre[];
}
