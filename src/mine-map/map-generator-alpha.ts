//Map Generator Alpha v0.0.1 - totally random xD

import IField from './interfaces/field'
import EmptyField from './empty-field';
import MineField from './mine-field';
import ObstacleField from './obstacle-field';
import TreeField from './tree-field';

import MineMap from './mine-map';
import MineRandomGenerator from './mine-random-generator';

export default class MapGeneratorAlpha {
    static generateIt(sizeX : number, sizeY : number) {
        let map = new MineMap(sizeX, sizeY);
        for(let y = 0; y < map.getMapSize().y; y++) {
            for(let x = 0; x < map.getMapSize().x; x++) {
                map.setField(x, y, this.getRandomField());
            }
        }
        return map;
    }
    private static getRandomField() : IField {
        let fieldNumber = Math.floor(Math.random() * 4);
        switch(fieldNumber) {
            case 0:
                return new EmptyField();
            case 1:
                return new MineField(MineRandomGenerator.generateMine());
            case 2:
                return new ObstacleField();
            case 3:
                return new TreeField();
            default:
                throw new Error("I don't know what the fuck happened, the universe is collapsing, aaaaa!!!!");
        }

    }
}