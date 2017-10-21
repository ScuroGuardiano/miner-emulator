import IField from './interfaces/field';
import IMine from './../emulator/interfaces/mine';

export default class MineField implements IField {
    constructor(mine : IMine) {
        this._fieldType = "mine-field";
        this._mine = mine;
    }
    private _fieldType: string;
    private _mine : IMine;

    public getFieldType() {
        return this._fieldType;
    }
    public canMinerStandOnIt() {
        return true;
    }
    public getMine() : IMine {
        return this._mine;
    }
}
