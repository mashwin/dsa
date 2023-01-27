/**
 * Given a binary sorted matrix A of size N x N. Find the row
 * with the maximum number of 1.
 * If two rows have the maximum number of 1 then return
 * the row which has a lower index.
 */

const A = [
    [0, 1, 1],
    [0, 0, 1],
    [0, 1, 1]
];

const rows = A.length;
const cols = A[0].length;

let i = 0;
let j = cols - 1;

/**
 * i will be incremented untill all rows are done
 * j will be decremented untill all columns are done
 */


let row = -1;
while (i < rows && j >= 0) {
    if (A[i][j] === 1) {
        j--;
        row = i;
    } else {
        i++;
    }
}

console.log('the row ', row);