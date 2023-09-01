/**
 * Given an array A of N integers.
 * Find the largest continuous sequence in a array which sums
 * to zero.
 */

const A = [1, 2, -2, 4, -4];

const lsZero = (A) => {
  const map = new Map();

  let i = 0;
  let sum = 0;
  let start = -1;
  let end = -1;
  let maxLength = 0;
  while (i < A.length) {
    sum += A[i];
    if (map.has(sum)) {
      let calculateLength = i - map.get(sum);
      if (calculateLength > maxLength) {
        maxLength = calculateLength;
        start = map.get(sum);
        end = i;
      }
    } else {
      map.set(A[i], i);
    }
    i++;
  }

  const temp = [];
  if (end !== -1) {
    for (let i = start + 1; i <= end; i++) {
      temp.push(A[i]);
    }
  }

  return temp;
};

const result = lsZero(A);

console.log("result: ", result);
