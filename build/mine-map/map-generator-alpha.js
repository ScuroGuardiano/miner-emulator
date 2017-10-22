"use strict";
//Map Generator Alpha v0.0.1 - totally random xD
Object.defineProperty(exports, "__esModule", { value: true });
const empty_field_1 = require("./empty-field");
const mine_field_1 = require("./mine-field");
const obstacle_field_1 = require("./obstacle-field");
const tree_field_1 = require("./tree-field");
const mine_map_1 = require("./mine-map");
const mine_random_generator_1 = require("./mine-random-generator");
class MapGeneratorAlpha {
    static generateIt(sizeX, sizeY) {
        let map = new mine_map_1.default(sizeX, sizeY);
        for (let y = 0; y < map.getMapSize().y; y++) {
            for (let x = 0; x < map.getMapSize().x; x++) {
                map.setField(x, y, this.getRandomField());
            }
        }
        return map;
    }
    static getRandomField() {
        let fieldNumber = Math.floor(Math.random() * 4);
        switch (fieldNumber) {
            case 0:
                return new empty_field_1.default();
            case 1:
                return new mine_field_1.default(mine_random_generator_1.default.generateMine());
            case 2:
                return new obstacle_field_1.default();
            case 3:
                return new tree_field_1.default();
            default:
                throw new Error("I don't know what the fuck happened, the universe is collapsing, aaaaa!!!!");
        }
    }
}
exports.default = MapGeneratorAlpha;
