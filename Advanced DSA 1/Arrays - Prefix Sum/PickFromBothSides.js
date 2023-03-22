/**
 * Given an integer array A of size N.
 * You have to pick exactly B elements from either left or right end of the
 * array A to get the maximum sum.
 * 
 * Find and return this maximum possible sum.
 * 
 */

const A = [5, -2, 3, 1, 2];
const B = 3;

// const A = [1, 2];
// const B = 1;

const pickFromBothSides = (A, B) => {

    const ps = [];
    ps[0] = A[0];
    for (let i = 1; i < A.length; i++) {
        ps[i] = ps[i - 1] + A[i];
    }

    let ans = Number.NEGATIVE_INFINITY;
    const n = A.length;
    let start = 0;
    let end = n - B;
    while (end < n) {
        let remSum = 0;
        if (start === 0) {
            remSum = ps[end - 1]
        } else {
            remSum = ps[end - 1] - ps[start - 1]
        }

        ans = Math.max(ans, ps[n - 1] - remSum);
        end++;
        start++;
    }

    return ans;
}

const result = pickFromBothSides(A, B);

console.log('result: ', result);
