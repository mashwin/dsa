/**
 * Selection sort
 */

const A = [4, 1, 9, 2, 3, 6];

for (let i = 0; i < A.length - 1; i++) {
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
