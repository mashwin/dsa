/**
 * Write a recursive function that checks whether string A
 * is a palindrome or Not.
 * Return 1 if the string A is a palindrome, else return 0.
 *
 */

const isPallindrome = (A, i, j) => {
  if (i === j) {
    return true;
  }

  if (A[i] === A[j]) {
    return isPallindrome(A, ++i, --j);
  } else {
    return false;
  }
};

const A = "naman";
const result = isPallindrome(A, 0, A.length - 1);

return result === true ? 1 : 0;
