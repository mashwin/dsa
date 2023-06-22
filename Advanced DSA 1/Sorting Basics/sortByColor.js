/**
 * Given an array with N objects colored red, white, or blue,
 * sort them so that objects of the same color are adjacent, with
 * the colors in the order red, white, and blue.
 *
 * red -> 0
 * white -> 1
 * blue -> 2
 */

A = [0, 1, 2, 0, 1, 2];

const sortByColor = (A) => {
  let low = 0;
  let mid = 0;
  let high = A.length - 1;

  while (mid <= high) {
    if (A[mid] === 0) {
      let temp = A[low];
      A[low] = A[mid];
      A[mid] = temp;
      mid++;
      low++;
    } else if (A[mid] === 1) {
      mid++;
    } else if (A[mid] === 2) {
      let temp = A[high];
      A[high] = A[mid];
      A[mid] = temp;
      high--;
      mid++;
    }
  }

  return A;
};

const result = sortByColor(A);
console.log("result: ", result);
