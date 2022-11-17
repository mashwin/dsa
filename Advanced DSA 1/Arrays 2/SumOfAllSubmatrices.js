/**
 * Given a 2D Matrix A of dimensions N*N, we need to return the
 * sum of all possible submatrices.
 */

const A = [
    [1, 1],
    [1, 1]
];

let sum = 0;
let rows = A.length;
let cols = A[0].length;

for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
        let contribution =
            A[i][j] * (i + 1) * (j + 1) * (rows - i) * (cols - j);
        sum += contribution;
    }
}

console.log(sum);