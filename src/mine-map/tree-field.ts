import IField from './interfaces/field';

export default class TreeField implements IField {
    constructor() {
        this._fieldType = "tree-field";
    }
    private _fieldType: string;

    public getFieldType() {
        return this._fieldType;
    }
    public canMinerStandOnIt() {
        return false;
    }
}
