/**
 * Given an array of positive integers A, two integers appear
 * only once, and all the other integers appear twice.
 * 
 */

const A = [1, 2, 3, 1, 2, 4];

let xorValue = 0;
for (let i = 0; i < A.length; i++) {
    xorValue = xorValue ^ A[i];
}

let rmsb = xorValue & ~(xorValue - 1);

let xorA = 0;
let xorB = 0;

for (let i = 0; i < A.length; i++) {
    if (rmsb & A[i]) {
        xorA = xorA ^ A[i];
    } else {
        xorB = xorB ^ A[i];
    }
}

console.log('result: ', xorA, xorB);
