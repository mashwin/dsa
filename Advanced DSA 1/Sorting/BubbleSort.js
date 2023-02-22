/**
 * Bubble sort
 */

const A = [4, 3, 7, 1, 5];

for (let i = 0; i < A.length - 1; i++) {
    for (let j = 0; j < A.length - i - 1; j++) {
        if (A[j] > A[j + 1]) {
            let temp = A[j];
            A[j] = A[j + 1];
            A[j + 1] = temp;
        }
    }
}

console.log('sorted array ', A);