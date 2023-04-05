/**
 * Given an array of size N, find the subarray of size K with the
 * least average.
 * 
 * Return the index of the first element of the subarray of size k
 * that has least average.
 */

const A = [3, 7, 90, 20, 10, 50, 40];
const B = 3;

const subArraysWithLeastAverage = (A, B) => {

    const ps = [];
    ps[0] = A[0];
    for (let i = 1; i < A.length; i++) {
        ps[i] = ps[i - 1] + A[i];
    }

    let start = 0;
    let n = A.length;
    let minAvg = Number.POSITIVE_INFINITY;
    let startIndex = 0;
    while (start <= n - B) {
        let end = B + start - 1;
        let sum = 0;
        if (start === 0) {
            sum = ps[end];
        } else {
            sum = ps[end] - ps[start - 1];
        }
        if (sum < minAvg) {
            minAvg = sum;
            startIndex = start;
        }
        start++;
    }

    return startIndex;
}

const result = subArraysWithLeastAverage(A, B);