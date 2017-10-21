export default interface Field {
    getFieldType: () => string;
    canMinerStandOnIt: () => boolean;
}
