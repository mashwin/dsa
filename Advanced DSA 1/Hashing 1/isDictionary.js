/**
 * Surprisingly, in an alien language, they also use English
 * lowercase letters, but possibly in a different order.
 *
 * Given an array of words A of size N written in the alien
 * language, and the order of the alphabet denoted by string B
 * of size 26, return 1 if and only if the given words are
 * sorted lexicographically in this alien language else,
 * return 0.
 *
 */

const compare = (word1, word2, map) => {
  let i = 0;
  let j = 0;
  let compare = 0;
  while (i < word1.length && j < word2.length && compare === 0) {
    compare = map.get(word1[i]) - map.get(word2[j]);
    i++;
    j++;
  }

  if (compare === 0) {
    return word1.length - word2.length;
  }

  return compare;
};

const isDictionary = (A, B) => {
  const map = new Map();
  for (let i = 0; i < B.length; i++) {
    map.set(B[i], i);
  }

  let flag = true;
  for (let j = 0; j < A.length - 1; j++) {
    const word1 = A[j];
    const word2 = A[j + 1];

    let result = compare(word1, word2, map);
    if (result > 0) {
      flag = false;
    }
  }

  return flag === true ? 1 : 0;
};

const A = ["hello", "scaler", "interviewbit"];
const B = "adhbcfegskjlponmirqtxwuvzy";

const result = isDictionary(A, B);
console.log("the result ", result);
