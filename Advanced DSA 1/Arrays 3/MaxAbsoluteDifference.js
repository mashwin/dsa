/**
 * You are given an array of N integers, A1, A2, .... AN.
 * Return the maximum value of f(i, j) for all 1 ≤ i, j ≤ N.
 * f(i, j) is defined as |A[i] - A[j]| + |i - j|, where
 * |x| denotes absolute value of x.
 */


const A = [1, 3, -1];

let max1 = Number.NEGATIVE_INFINITY;
let max2 = Number.NEGATIVE_INFINITY;
let min1 = Number.POSITIVE_INFINITY;
let min2 = Number.POSITIVE_INFINITY;

for (let i = 0; i < A.length; i++) {
    max1 = Math.max(max1, A[i] + 1);
    max2 = Math.max(max2, -A[i] + 1);

    min1 = Math.min(min1, A[i] + 1);
    min2 = Math.min(min2, -A[i] + 1);
}

let ans = Math.max((max1 - min1), (max2 - min2));
console.log('the ans ', ans);