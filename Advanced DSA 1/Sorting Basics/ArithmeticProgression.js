/**
 * Given an integer array A of size N. Return 1 if the array can be
 * arranged to form an arithmetic progression, otherwise return 0.
 *
 * A sequence of numbers is called an arithmetic progression if
 * the difference between any two consecutive elements is the
 * same.
 */

// const A = [3, 5, 1];
const A = [2, 4, 1];

const arithmeticProgression = (A) => {
  // sort the array in ascending order
  A.sort((a, b) => a - b);

  const d = A[1] - A[0];

  for (let j = 2; j < A.length; j++) {
    let diff = Math.abs(A[j] - A[j - 1]);
    if (diff !== d) {
      return -1;
    }
  }

  return 1;
};

const result = arithmeticProgression(A);

console.log("result: ", result);
