/**
 * Given a matrix of integers A of size N x M and an integer B.
 * In the given matrix every row and column is sorted in non-decreasing order. 
 * Find and return the position of B
 */

// const A = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];

// const B = 2;

// const A = [
//     [1, 2],
//     [3, 3]
// ];

// const B = 3;

const A =
    [
        [1, 3, 5, 7],
        [2, 4, 6, 8]
    ]
const B = 10;

// start searching from top left corner
let i = 0;
let j = A[0].length - 1;
let rows = A.length;
let cols = A[0].length;
const arr = [];

while (i < rows && j > 0) {
    if (A[i][j] > B) {
        j--;
    } else if (A[i][j] < B) {
        i++;
    } else if (A[i][j] === B) {
        arr.push((i + 1) * 1009 + (j + 1));
        j--;
    }
}

if (arr.length > 0) {
    arr.sort((a, b) => a - b);
    console.log(arr[0]);
}

// console.log('the arr finally ', arr.sort((a, b) => a - b));
