import IOre from './../interfaces/ore';
import IBasicOre from './../interfaces/basic-ore';
import IOreEquipment from './../interfaces/ore-equipment';
export default class Eq implements IOreEquipment {
    constructor();
    private ores;
    addOre(ore: IOre): void;
    getOre(type: string): IOre | undefined;
    getOreList(): IBasicOre[];
}
