/**
 * Give a N * N square matrix A, return an array of its anti-diagonals.
 *
 * In this approach we calculate the number of diagonals which will
 * be created using 2*n - 1. Based upon the sum of indices, we push them
 * into appropriate row.
 */

const A = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const antiDiagonals = (A) => {
  const n = A.length;
  const numOfDiagonals = 2 * n - 1;

  const B = [];
  for (let i = 0; i < numOfDiagonals; i++) {
    B.push([]);
  }

  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < A[0].length; j++) {
      B[i + j].push(A[i][j]);
    }
  }
};

const result = antiDiagonals(A);
