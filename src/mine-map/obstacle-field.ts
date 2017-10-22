import IField from './interfaces/field';

export default class ObstacleField implements IField {
    constructor() {
        this._fieldType = "obstacle-field";
    }
    private _fieldType: string;

    public getFieldType() {
        return this._fieldType;
    }
    public canMinerStandOnIt() {
        return false;
    }
}
