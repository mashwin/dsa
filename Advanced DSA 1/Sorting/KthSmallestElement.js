/**
 * Find the Bth smallest element in given array A .
 */

// const A = [2, 1, 4, 3, 2];
// const B = 3;

const A = [1, 2];
const B = 2;

for (let i = 0; i < A.length; i++) {
    let min = i;
    for (let j = i + 1; j < A.length; j++) {
        if (A[j] < A[min]) {
            min = j;
        }
    }

    let temp = A[i];
    A[i] = A[min];
    A[min] = temp;
}

console.log('result: ', A[B - 1]);