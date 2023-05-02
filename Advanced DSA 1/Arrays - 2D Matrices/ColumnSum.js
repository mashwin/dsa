/**
 * You are given a 2D integer matrix A, return a 1D integer array
 * containing column-wise sums of original matrix.
 *
 */

const A = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 2, 3, 4],
];

const columnSum = (A) => {
  let temp = [];
  for (let col = 0; col < A[0].length; col++) {
    let sum = 0;
    for (let row = 0; row < A.length; row++) {
      sum += A[row][col];
    }
    temp.push(sum);
  }

  return temp;
};

const result = columnSum(A);

console.log("result: ", result);
