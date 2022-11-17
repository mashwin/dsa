/**
 * You are given a binary string A(i.e., with characters 0 and 1)
 * consisting of characters A1, A2, ..., AN. In a single operation,
 * you can choose two indices, L and R, such that 1 ≤ L ≤ R ≤ N
 * and flip the characters AL, AL+1, ..., AR. By flipping, we mean
 * changing character 0 to 1 and vice-versa.
 * 
 * Your aim is to perform ATMOST one operation such that in
 * the final string number of 1s is maximized.
 */

const A = "010";

const arr = A.split("").map((elem) => parseInt(elem));
const kArr = [];
let countOnes = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
        kArr.push(1);
    } else {
        countOnes = countOnes + 1;
        kArr.push(-1);
    }
}

if (countOnes === arr.length) {
    return [];
}

let start = 0;
let sum = 0;
let maxSum = Number.NEGATIVE_INFINITY;
let sg = 0;
let eg = 0;

for (let i = 0; i < kArr.length; i++) {
    sum = sum + kArr[i];

    if (sum < 0) {
        sum = 0;
        start = i + 1;
    }

    if (sum > maxSum) {
        maxSum = sum;
        sg = start;
        eg = i;
    }
}

const temp = [];
temp.push(sg + 1);
temp.push(eg + 1);
return temp;