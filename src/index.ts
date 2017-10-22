import MapGeneratorAlpha from './mine-map/map-generator-alpha';
import * as fs from 'fs';
import * as Path from 'path';

let map = MapGeneratorAlpha.generateIt(50, 50);

let stringMap = '';

function fieldTypeToChar(type : string) : string {
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

for(let y = 0; y < map.getMapSize().y; y++) {
    for(let x = 0; x < map.getMapSize().x; x++) {
        let fieldType = map.getField(x, y).getFieldType();
        stringMap += fieldTypeToChar(fieldType);
    }
    stringMap += '\n';
}

console.log(stringMap);
fs.writeFile(Path.resolve(__dirname, "../") + "/mapa.txt", stringMap, _=> {
    console.log("Map written to " + Path.resolve(__dirname, "../") + "/mapa.txt");
});