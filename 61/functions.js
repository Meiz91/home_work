'use strict'

///////////////////////////////////////////////////////////////////////////////////////////////
let words1 = ['thing', 'people', 'place', 'things', 'big', 'philoshiphy'];
let words2 = ['thing', 'people', 'place', 'things', 'biggest', 'philoshiphy'];

function myFilter(theArray, callback) {
    let i = true;
    for (let b = 0; b < theArray.length; b++) {
        if (!callback(theArray[b])) {
            i = false;
            break;
        }
    }
    return i;
}

let isAbove5 = p => { if (5 <= p.length) { return true; } else { return false; } };

console.log(words1.every(isAbove5));
console.log('line 1');
console.log(words2.every(isAbove5));
console.log('line 2');
console.log(myFilter(words1, p => { if (5 <= p.length) { return true; } else { return false; } }));
console.log('line 3');
console.log(myFilter(words2, p => { if (5 <= p.length) { return true; } else { return false; } }));
//////////////////////////////////////////////////////////////////////////////////////////////////
console.log('line 4');
let letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
let letters2 = ['A', 'B', 'c', 'D', 'E', 'F', 'G'];

function myFilter2(theArray, callback2) {
    let b = true;
    for (let i = 0; i < theArray.length; i++) {
        if (callback2(theArray[i]) !== true) {
            b = false;
            break;
        }
    } return b;
}
let isItUppercase = p => { if (p === p.toUpperCase()) { return true; } else { return false; } };
console.log(letters.every(isItUppercase));
console.log('line 5');
console.log(letters2.every(isItUppercase));
console.log('line 6');
console.log(myFilter2(letters, p => { if (p === p.toUpperCase()) { return true; } else { return false; } }));
console.log('line 7');
console.log(myFilter2(letters2, p => { if (p === p.toUpperCase()) { return true; } else { return false; } }));
console.log('line 8');
console.log(myFilter2(letters, p => { if (p === p.toUpperCase()) { return true; } else { return false; } }));
console.log('line 9');
console.log(myFilter2(letters2, p => { if (p === p.toLowerCase()) { return true; } else { return false; } }));
///////////////////////////////////////////////////////////////////////////////////////////
console.log('line 10');
let west = ['hungry', 'tired', 'happy', 'sad'];
let west2 = ['HUNGRY', 'TIRED', 'HAPPY', 'SAD'];
function onlyIf(array, test, action) {
    for (let i = 0; i < array.length; i++) {
        if (test(array[i]) === true) {
            console.log(action);
        } else {
            console.log('sorry didnt pass the test');

        }
    }
}
function only(array, test, action) {
    array.forEach(element => {
        if (test(element)) {
            action(element);
        }
    });
}
only(west, p => p === p.toLowerCase(), console.log);
only(west, p => p === p.toUpperCase(), console.log);
onlyIf(west2, p => p === p.toLowerCase(), 'ya did it!');
console.log('line 11');
onlyIf(west, p => p === p.toLowerCase(), 'ya did it!');
/////////////////////////////////////////////////

let west3 = ['HOWDY', 'HOW', 'ARE', 'YOU', 'feeling', 'today'];
let east = west3.filter(p => p === p.toUpperCase());
let east2 = west3.filter(p => p === p.toLowerCase());
east.forEach(p => console.log(p));
east2.forEach(p => console.log(p));
west3.filter(p => p === p.toUpperCase()).forEach(p => console.log(p));
/////////////////////////////////////////////

function multiply(number1, number2) {
    let one = number1 * number2;
    return one;
}
console.log(multiply(4, 6));
console.log(multiply(4, 10));
console.log(multiply(4, 8));
console.log(multiply(4, 4));
///////////////////////////////////

function getMultiply() {
    return function (a, b) {
        return a * b;
    };

}
console.log(getMultiply()(8, 8));

/////////////////////////////////

function getBetterMultiplier(number) {
    let number1 = number;
    return function (a) {
        return number1 * a;
    };
}
console.log(getBetterMultiplier(5)(10));
let gbt = getBetterMultiplier(5);
console.log(gbt(5));

