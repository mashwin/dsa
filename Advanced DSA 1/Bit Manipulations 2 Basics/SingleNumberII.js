/**
 * Given an array of positive integers A, two integers appear
 * only once, and all the other integers appear twice.
 * Find the two integers that appear only once.
 * Note: Return the two numbers in ascending order.
 */

const A = [1, 2, 3, 1, 2, 4];

const singleNumber2 = (A) => {
  let xorValue = 0;
  for (let i = 0; i < A.length; i++) {
    xorValue = xorValue ^ A[i];
  }

  let rmsb = xorValue & (xorValue - 1);
  rmsb = xorValue ^ rmsb;

  let xora = 0;
  let xorb = 0;
  for (let i = 0; i < A.length; i++) {
    if (A[i] & rmsb) {
      xora = xora ^ A[i];
    } else {
      xorb = xorb ^ A[i];
    }
  }

  const temp = [];
  temp.push(xora);
  temp.push(xorb);

  return temp.sort((a, b) => a - b);
};

const result = singleNumber2(A);

console.log("result: ", result);
