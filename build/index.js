"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const map_generator_alpha_1 = require("./mine-map/map-generator-alpha");
const fs = require("fs");
const Path = require("path");
let map = map_generator_alpha_1.default.generateIt(50, 50);
let stringMap = '';
function fieldTypeToChar(type) {
    switch (type) {
        case 'empty-field':
            return " ";
        case 'tree-field':
            return "T";
        case 'obstacle-field':
            return "X";
        case 'mine-field':
            return "M";
        default:
            return "U";
    }
}
for (let y = 0; y < map.getMapSize().y; y++) {
    for (let x = 0; x < map.getMapSize().x; x++) {
        let fieldType = map.getField(x, y).getFieldType();
        stringMap += fieldTypeToChar(fieldType);
    }
    stringMap += '\n';
}
console.log(stringMap);
fs.writeFile(Path.resolve(__dirname, "../") + "/mapa.txt", stringMap, _ => {
    console.log("Map written to " + Path.resolve(__dirname, "../") + "/mapa.txt");
});
