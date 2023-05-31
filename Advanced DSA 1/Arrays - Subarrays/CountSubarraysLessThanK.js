/**
 * Given an array A of N non-negative numbers and a
 * non-negative number B,
 * you need to find the number of subarrays in A with a
 * sum less than B.
 */

const countSubarrays = (A, B) => {
  let start = 0;
  let end = 0;
  let count = 0;
  let sum = 0;
  while (end < A.length) {
    sum += A[end];
    while (sum > B && start <= end) {
      sum -= A[start];
      start++;
    }
    if (sum < B) {
      count += end - start + 1;
    }
    end++;
  }

  return count;
};

// const A = [2, 5, 6];
const A = [1, 11, 2, 3, 15];
const B = 10;

const result = countSubarrays(A, B);
console.log("result: ", result);
