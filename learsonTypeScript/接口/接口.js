"use strict";
// interface 接口定义
function objectLabel(labelObject) {
    console.log(labelObject.label);
}
let obj = { size: 10, label: 'Size 10' };
objectLabel(obj);
function createSquare(config) {
    let newSquare = { color: 'white', area: 10 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
let mySquare = createSquare({});
console.log(mySquare);
