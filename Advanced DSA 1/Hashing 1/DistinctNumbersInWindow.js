/**
 * You are given an array of N integers, A1, A2 ,..., AN and an
 * integer B. Return the of count of distinct numbers in all
 * windows of size B.
 */

const distinctNumbersInWindow = (A, B) => {
  const result = [];
  const freqMap = new Map();

  for (let i = 0; i < B; i++) {
    if (freqMap.has(A[i])) {
      freqMap.set(A[i], freqMap.get(A[i]) + 1);
    } else {
      freqMap.set(A[i], 1);
    }
  }

  result.push(freqMap.size);
  let i = 1;
  while (i <= A.length - B) {
    let j = i + B - 1;

    freqMap.set(A[i - 1], freqMap.get(A[i - 1]) - 1);

    if (freqMap.get(A[i - 1]) === 0) {
      freqMap.delete(A[i - 1]);
    }

    if (freqMap.has(A[j])) {
      freqMap.set(A[j], freqMap.get(A[j]) + 1);
    } else {
      freqMap.set(A[j], 1);
    }

    result.push(freqMap.size);
    i++;
  }

  return result;
};

const A = [1, 2, 1, 3, 4, 3];
const B = 3;

const result = distinctNumbersInWindow(A, B);
console.log("result: ", result);
