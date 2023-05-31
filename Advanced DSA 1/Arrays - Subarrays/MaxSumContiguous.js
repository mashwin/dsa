/**
 * Find the maximum sum of contiguous non-empty subarray
 * within an array A of length N.
 */

const A = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

const maxSumContiguousSubarray = (A) => {
  let ans = Number.NEGATIVE_INFINITY;
  let sum = 0;
  for (let i = 0; i < A.length; i++) {
    sum += A[i];
    ans = Math.max(ans, sum);
    if (sum < 0) {
      sum = 0;
    }
  }

  return ans;
};

const result = maxSumContiguousSubarray(A);
console.log("result: ", result);
