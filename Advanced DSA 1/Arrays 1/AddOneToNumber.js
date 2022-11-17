/**
 * Given a non-negative number represented as an array of
 * digits, add 1 to the number ( increment the number
 * represented by the digits ).
 * 
 * The digits are stored such that the most significant digit is at
 * the head of the list.
 */

const A = [1, 2, 3];
// const A = [9, 9, 9];

let carry = 0;
let i = A.length - 1;

let ans = [];
while (i >= 0) {
    let sum = 0;
    if (i === A.length - 1) {
        sum += A[i] + carry + 1;
    } else {
        sum += A[i] + carry;
    }
    if (sum === 10) {
        ans.push(0);
        carry = 1;
    } else {
        ans.push(sum);
    }
    i--;
}

// reverse the ans array
let j = 0;
let k = A.length - 1;
while (j < k) {
    let temp = ans[j];
    ans[j] = ans[k];
    ans[k] = temp;
    j++;
    k--;
}

if (carry === 1) {
    ans.unshift(1);
}

console.log(ans);