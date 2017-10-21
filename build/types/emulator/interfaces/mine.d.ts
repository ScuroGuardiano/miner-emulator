export default interface Mine {
    readonly oreType: string;
    readonly remaining: number;
    mineOre: (amout: number) => number;
}
