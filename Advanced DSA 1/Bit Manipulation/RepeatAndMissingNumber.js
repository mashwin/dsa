/**
 * You are given a read only array of n integers from 1 to n.
 * Each integer appears exactly once except A which appears twice 
 * and B which is missing.
 */

const A = [3, 1, 2, 5, 3];

let xorValue = 0;
for (let i = 0; i < A.length; i++) {
    xorValue = xorValue ^ A[i];
}

for (let j = 1; j <= A.length; j++) {
    xorValue = xorValue ^ j;
}

console.log('length of A ', A.length);