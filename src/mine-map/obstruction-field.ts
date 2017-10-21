import IField from './interfaces/field';

export default class ObstructionField implements IField {
    constructor() {
        this._fieldType = "obstruction-field";
    }
    private _fieldType: string;

    public getFieldType() {
        return this._fieldType;
    }
    public canMinerStandOnIt() {
        return false;
    }
}
