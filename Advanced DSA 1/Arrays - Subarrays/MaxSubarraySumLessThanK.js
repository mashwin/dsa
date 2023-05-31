/**
 * You are given an integer array C of size A.
 * Now you need to find a subarray (contiguous elements) so that the sum of
 * contiguous elements is maximum.
 * But the sum must not exceed B.
 */

// Brute force approach

// let ans = Number.NEGATIVE_INFINITY;
// for (let i = 0; i < C.length; i++) {
//   let sum = 0;
//   for (let j = i; j < C.length; j++) {
//     sum += C[j];
//     if (sum <= B) {
//       if (sum > ans) {
//         ans = sum;
//       }
//     }
//   }
// }

const maxSubarray = (B, C) => {
  let start = 0;
  let end = 0;
  let sum = 0;
  let ans = Number.NEGATIVE_INFINITY;
  while (end < C.length) {
    sum += C[end];
    while (sum > B && start < end) {
      sum -= C[start];
      start++;
    }

    if (sum > ans) {
      ans = sum;
    }
    end++;
  }

  return ans;
};

const B = 12;
const C = [2, 1, 3, 4, 5];
const result = maxSubarray(B, C);
console.log("result: ", result);
