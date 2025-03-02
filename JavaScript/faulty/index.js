/* Create a faulty calculator using JavaScript

This faulty calculator does following:
1. It takes two numbers as input from the user
2. It perfoms wrong operations as follows:

+ ---> -
* ---> +
- ---> /
/ ---> **


It performs wrong operation 10% of the times

*/
let random = Math.random();

function sum(a,b) {
    if (random < 0.1) {
        return a - b;
    } else {
        return a + b;
    }
}
function mult(a,b) {
    if (random < 0.1) {
        return a + b;
    } else {
        return a * b;
    }
}
function sub(a,b) {
    if (random < 0.1) {
        return a / b;
    } else {
        return a - b;
    }
}
function div(a,b) {
    if (random < 0.1) {
        return a ** b;
    } else {
        return a / b;
    }
}
console.log(random);

let ans = sum(4,7);
console.log(ans);

