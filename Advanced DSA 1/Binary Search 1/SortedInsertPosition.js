/**
 * Given a sorted array A of size N and a target value B, return
 * the index (0-based indexing) if the target is found.
 * If not, return the index where it would be if it were inserted in order.
 * 
 */

const A = [1, 3, 5, 6];
const B = 5;

const getIndex = () => {

    if (A.length == 1) {
        if (A[0] == B) {
            return 0
        }
    }

    if (B < A[0]) {
        return 0;
    }

    if (B > A[A.length - 1]) {
        return A.length;
    }


    let s = 0;
    let e = A.length - 1;
    let mid = 0;

    while (s <= e) {
        mid = Math.floor((s + e) / 2);

        if (A[mid] === B) {
            return mid;
        } else if (B > A[mid]) {
            s = mid + 1;
        } else if (B < A[mid]) {
            e = mid - 1;
        }
    }

    return s;
}

const result = getIndex(A, B);
console.log('result: ', result);
