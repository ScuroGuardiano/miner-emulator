import IField from './interfaces/field';
export default class MineMap {
    constructor(sizeX: number, sizeY: number);
    private size;
    private fields;
    getField(x: number, y: number): IField | undefined;
    setField(x: number, y: number, field: IField): void;
    getMapSize(): {
        x: number;
        y: number;
    };
}
