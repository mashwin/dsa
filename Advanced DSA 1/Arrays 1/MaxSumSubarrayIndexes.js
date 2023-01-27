/**
 * Find the contiguous non-empty subarray within an array, A
 * of length N, with the largest sum.
 */

// const A = [1, 2, 3, 4, -10];
const A = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

if (A.length === 1) {
    return A[0];
}

let ans = Number.NEGATIVE_INFINITY;
let sum = 0;
let start = 0;
let startGlobal = 0;
let endGlobal = 0;

for (let i = 0; i < A.length; i++) {

    sum = sum + A[i];
    if (sum > ans) {
        ans = Math.max(sum, ans);
        startGlobal = start;
        endGlobal = i;
    }

    if (sum < 0) {
        sum = 0;
        start = i + 1;
    }
}

console.log(ans, startGlobal, endGlobal);