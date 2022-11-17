/**
 * You are given an integer array A of size N.
 * You have to pick B elements in total. Some (possibly 0)
 * elements from left end of array A and some (possibly 0) from
 * the right end of array A to get the maximum sum.
 * Find and return this maximum possible sum.
 */

// const A = [5, -2, 3, 1, 2];
// const B = 3;

const A = [1, 2];
const B = 1;

let ans = Number.NEGATIVE_INFINITY;
let currentSum = 0;
for (let i = 0; i < B; i++) {
    currentSum += A[i];
}

ans = Math.max(ans, currentSum);
let back = B - 1;

for (let j = A.length - 1; j >= A.length - B; j--) {
    currentSum += A[j] - A[back];
    back--;
    ans = Math.max(ans, currentSum);
}

console.log('*** the ans ***', ans);