import IField from './interfaces/field';
export default class ObstructionField implements IField {
    constructor();
    private _fieldType;
    getFieldType(): string;
    canMinerStandOnIt(): boolean;
}
