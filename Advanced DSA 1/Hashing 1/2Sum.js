/**
 * Given an array of integers, find two numbers such that they
 * add up to a specific target number.
 */

const twoSum = (A, B) => {
  const map = new Map();
  let start = -1;
  let end = -1;
  let currSum = 0;
  let i = 0;
  while (i < A.length) {
    console.log("elem ", A[i]);
    currSum += A[i];
    let x = B - A[i];
    if (map.has(x)) {
      start = map.get(x);
      end = i;
    } else {
      map.set(currSum, i);
    }
    i++;
  }
};

const A = [2, 7, 11, 15];
const B = 9;

const result = twoSum(A, B);
