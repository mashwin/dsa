/**
 * Given an array of positive integers A and an integer B, find
 * and return first continuous subarray which adds to B.
 *
 * If the answer does not exist return an array with a single
 * integer "-1".
 *
 */

const subArrayWithGivenSum = (A, B) => {
  let start = -1;
  let end = -1;

  let i = 0;
  let currSum = 0;
  const map = new Map();
  map.set(0, -1);
  while (i < A.length) {
    currSum += A[i];
    if (map.has(currSum - B)) {
      end = i;
      start = map.get(currSum - B) + 1;
      break;
    } else {
      map.set(currSum, i);
    }
    i++;
  }

  const temp = [];
  if (start === -1) {
    temp.push(-1);
  } else {
    for (let i = start; i <= end; i++) {
      temp.push(A[i]);
    }
  }

  return temp;
};

const A = [1, 2, 3, 4, 5];
const B = 5;

const result = subArrayWithGivenSum(A, B);
console.log("result: ", result);
