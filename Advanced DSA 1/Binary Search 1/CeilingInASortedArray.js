/**
 * Given a sorted array B of integers of size A, and a integer
 * value C, return the ceiling of C which is present in array B.
 * 
 */

const binarySearchCeil = (A, B, C) => {
    let ans = -1;

    let l = 0;
    let h = B.length - 1;

    while (l <= h) {
        let mid = Math.floor((l + h) / 2);
        if (B[mid] === C) {
            ans = B[mid];
            break;
        } else if (C > B[mid]) {
            l = mid + 1;
        } else {
            ans = B[mid];
            h = mid - 1;
        }
    }

    return ans;
}

const A = 5;
const B = [2, 5, 6, 9, 18];
const C = 5;

const result = binarySearchCeil(A, B, C);
console.log('result: ', result);