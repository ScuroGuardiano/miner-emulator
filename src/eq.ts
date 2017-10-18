import Ore from './ore';
export default class Eq {
    constructor() {
        this.ores = new Map();
    }

    private ores : Map<string, Ore>;
    
    public addOre(ore : Ore) {
        if(this.ores.has(ore.type))
            this.ores.get(ore.type).addOre(ore);
        else
            this.ores.set(ore.type, ore);
    }
    public getOre(type : string) : Ore | undefined {
        if(this.ores.has(type))
            return this.ores.get(type);
        else
            return undefined;
    }
    public getOreList() {
        let list : {type: string, amount: number}[] = [];
        this.ores.forEach(v => list.push({type: v.type, amount: v.amount}));
        return list;
    }
}