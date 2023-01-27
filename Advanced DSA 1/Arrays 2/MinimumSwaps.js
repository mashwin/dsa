/**
 * Given an array of integers A and an integer B, find and return
 * the minimum number of swaps required to bring all the
 * numbers less than or equal to B together.
 */

// const A = [1, 12, 10, 3, 14, 10, 5];
// const B = 8;

const A = [5, 17, 100, 11];
const B = 20;

let ans = Number.POSITIVE_INFINITY;

/**
 * size of the sliding window will be equal to number
 * of values less than B
 */
let windowSize = 0;
for (let i = 0; i < A.length; i++) {
    if (A[i] <= B) {
        windowSize++;
    }
}

/**
 * calculate no of values > B and store them in x
 */
let x = 0;
for (let i = 0; i < windowSize; i++) {
    if (A[i] > B) {
        x++;
    }
}

ans = Math.min(ans, x);

// iterate through each window and find min no of swaps
for (let i = 1; i <= A.length - windowSize; i++) {
    let start = i;
    let end = windowSize + start - 1;
    if (A[i - 1] > B) {
        x--;
    }
    if (A[end] > B) {
        x++;
    }
    ans = Math.min(ans, x);
}

console.log(ans);