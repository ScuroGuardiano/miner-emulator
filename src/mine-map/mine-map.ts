import IField from './interfaces/field';

export default class MineMap {
    constructor(sizeX : number, sizeY : number) {
        this.size.x = sizeX;
        this.size.y = sizeY;
        Object.freeze(this.size);
        this.fields = [];
        for(let i = 0; i < this.size.x; i++) {
            this.fields.push([]);
        }
    }

    private size : {x : number, y : number};
    private fields : IField[][];

    public getField(x : number, y : number) : IField | undefined {
        if(x < this.size.x && y < this.size.y) {
            return this.fields[x][y];
        }
        else
            throw new RangeError("Error, you're trying to get field that is out of map!!!");
    }
    public setField(x : number, y : number, field : IField) {
        if(x < this.size.x && y < this.size.y) {
            this.fields[x][y] = field;
        }
        else
            throw new RangeError("Error, you're trying to set field out of map!!!");
    }
    public getMapSize() : {x : number, y : number} {
        return this.size;
    }
}
