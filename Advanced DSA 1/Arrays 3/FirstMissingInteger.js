/**
 * Given an unsorted integer array, A of size N. Find the first
 * missing positive integer.
 * 
 * Note: Your algorithm should run in O(n) time and use
 * constant space.
 */

const A = [3, 4, -1, 1];
// const A = [-8, -7, -6];

let n = A.length;
for (let i = 0; i < n; i++) {
    if (A[i] > 0 && A[i] <= n) {
        if (A[i] === i + 1) {
            // handle normal case
            continue;
        } else if (A[i] === A[A[i] - 1]) {
            // handle duplicate element case
            continue;
        } else {
            let temp = A[A[i] - 1];
            A[A[i] - 1] = A[i];
            A[i] = temp;
            i--;
        }
    }
}

for (let i = 0; i < A.length; i++) {
    if (A[i] !== i + 1) {
        console.log(i + 1);
        break;
    }
}

// if here return n + 1, since all elements are placed