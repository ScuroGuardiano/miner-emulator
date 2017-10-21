import IField from './interfaces/field';
import IMine from './../emulator/interfaces/mine';
export default class MineField implements IField {
    constructor(mine: IMine);
    private _fieldType;
    private _mine;
    getFieldType(): string;
    canMinerStandOnIt(): boolean;
    getMine(): IMine;
}
