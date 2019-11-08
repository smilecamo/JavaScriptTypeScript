"use strict";
// interface 接口定义
function objectLabel(labelObject) {
    console.log(labelObject.label);
}
let obj = { size: 10, label: 'Size 10' };
objectLabel(obj);
let num = { x: 1, y: 2 };
let a = [1, 2, 3];
let b = a;
console.log(b);
