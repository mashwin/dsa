/**
 * Given two sorted integer arrays A and B, merge B and A as
 * one sorted array and return it as an output.
 */

// const A = [4, 7, 9];
// const B = [2, 11, 19];

const A = [1];
const B = [2];

const ans = [];

let i = 0;
let j = 0;

while (i < A.length && j < B.length) {

    if (A[i] < B[j]) {
        ans.push(A[i]);
        i++;
    } else {
        ans.push(B[j]);
        j++;
    }
}

if (i == A.length) {
    while (j < B.length) {
        ans.push(B[j]);
        j++;
    }
} else {
    while (i < A.length) {
        ans.push(A[i]);
        i++;
    }
}

console.log('ans is ', ans);