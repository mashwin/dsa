/**
 * Given two integers A and B, find a number X such that A xor X
 * is minimum possible, and the number of set bits in X equals B.
 */

// const A = 3;
// let B = 3;

const A = 15;
let B = 2;

let ans = 0;
for (let i = 31; i >= 0 && B > 0; i--) {

    if (A & (1 << i)) {
        ans = ans | (1 << i);
        B = B - 1;
    }
}

if (B > 0) {
    for (let i = 0; i <= 31 && B > 0; i++) {
        if ((A & (1 << i)) === 0) {
            ans = ans | (1 << i);
            B = B - 1;
        }
    }
}

console.log('result: ', ans);