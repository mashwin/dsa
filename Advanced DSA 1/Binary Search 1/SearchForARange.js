/**
 * Given a sorted array of integers A (0-indexed) of size N, find the
 * starting and the ending position of a given integer B in array A.
 * Your algorithm's runtime complexity must be in the order of O(log n).
 * 
 * Return an array of size 2, such that the first element = starting
 * position of B in A and the second element = ending position
 * 
 * of B in A, if B is not found in A return [-1, -1].
 */

const A = [5, 7, 7, 8, 8, 10];
const B = 8;

const searchForARange = (A, B) => {
    let flg = false;
    let s = 0;
    let e = A.length - 1;
    let mid = 0;

    while (s <= e) {

        mid = Math.floor((s + e) / 2);
        if (A[mid] === B) {
            flg = true;
            break;
        } else if (B > A[mid]) {
            s = mid + 1;
        } else if (B < A[mid]) {
            e = mid - 1;
        }
    }

    const temp = [];
    if (flg) {
        let i = mid;
        while (i > 0) {
            if (A[i - 1] !== B) {
                break;
            }
            i--;
        }

        let j = mid;
        while (j < A.length) {
            if (A[j + 1] !== B) {
                break;
            }
            j++;
        }

        temp.push(i);
        temp.push(j);
    } else {
        temp.push(-1);
        temp.push(-1);
    }

    return temp;
}


const result = searchForARange(A, B);

console.log('result: ', result);