import IOre from './../interfaces/ore';
import IBasicOre from './../interfaces/basic-ore';
import IOreEquipment from './../interfaces/ore-equipment';

export default class Eq implements IOreEquipment {
    constructor() {
        this.ores = new Map();
    }

    private ores : Map<string, IOre>;

    public addOre(ore : IOre) {
        if(this.ores.has(ore.type))
            this.ores.get(ore.type).addOre(ore);
        else
            this.ores.set(ore.type, ore);
    }
    public getOre(type : string) : IOre | undefined {
        if(this.ores.has(type))
            return this.ores.get(type);
        else
            return undefined;
    }
    public getOreList() : IBasicOre[] {
        let list : IBasicOre[] = [];
        this.ores.forEach(v => list.push({type: v.type, amount: v.amount}));
        return list;
    }
}
