/**
 * Given a matrix of integers A of size N x M and an integer B.
 * Write an efficient algorithm that searches for integer B in matrix A.
 * 
 * This matrix A has the following properties:
 * 
 * 1. Integers in each row are sorted from left to right.
 * 2. The first integer of each row is greater than or equal to the last integer of the previous row.
 */

// Test Cases
// const A =
//     [
//         [1],
//     ];
// const B = 1;

const A = [
    [1, 3, 5, 7],
    [10, 11, 16, 20],
    [23, 30, 34, 50]
];

const B = 3;

searchMatrix = (A, B) => {

    let i = 0;
    let j = A[0].length - 1;

    while (i <= A.length - 1 && j >= 0) {

        if (B < A[i][j]) {
            j--;
        } else if (B > A[i][j]) {
            i++
        } else if (B === A[i][j]) {
            const temp = [];
            temp.push(i);
            temp.push(j);
            return temp;
        }
    }

    const temp = [];
    temp.push(i);
    temp.push(j);

    return temp;
}

const result = searchMatrix(A, B);
console.log('result: ', result);

// extra logic to return true or false
// if (result[0] > A.length - 1 || result[1] < 0) {
//     return -1
// } else {
//     return 1;
// }