"use strict";
function f(showNumber) {
    var x;
    if (showNumber) {
        x = 10;
    }
    return x;
}
console.log(f(true));
console.log(f(false));
