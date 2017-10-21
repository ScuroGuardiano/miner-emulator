import IField from './interfaces/field';
export default class TreeField implements IField {
    constructor();
    private _fieldType;
    getFieldType(): string;
    canMinerStandOnIt(): boolean;
}
