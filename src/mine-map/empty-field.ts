import IField from './interfaces/field';

export default class EmptyField implements IField {
    constructor() {
        this._fieldType = "empty-field";
    }
    private _fieldType : string;;

    public getFieldType() {
        return this._fieldType;
    }
    public canMinerStandOnIt() {
        return true;
    }
}
