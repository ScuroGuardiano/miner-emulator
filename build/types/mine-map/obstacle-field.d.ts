import IField from './interfaces/field';
export default class ObstacleField implements IField {
    constructor();
    private _fieldType;
    getFieldType(): string;
    canMinerStandOnIt(): boolean;
}
