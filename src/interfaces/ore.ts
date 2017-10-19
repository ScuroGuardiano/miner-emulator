import BasicOre from './basic-ore';
export default interface Ore extends BasicOre {
    addOre : (ore : Ore) => void;
}
