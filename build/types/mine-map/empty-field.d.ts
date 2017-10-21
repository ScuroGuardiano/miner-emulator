import IField from './interfaces/field';
export default class EmptyField implements IField {
    constructor();
    private _fieldType;
    getFieldType(): string;
    canMinerStandOnIt(): boolean;
}
