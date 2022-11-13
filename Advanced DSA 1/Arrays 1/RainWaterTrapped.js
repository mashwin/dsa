/**
 * Given a vector A of non-negative integers representing an
 * elevation map where the width of each bar is 1, compute
 * how much water it is able to trap after raining.
 */

const A = [0, 1, 0, 2];

const arrLeftMax = [];
const arrRightMax = [];

let leftMax = A[0];
arrLeftMax[0] = leftMax;
for (let i = 1; i < A.length; i++) {
    leftMax = Math.max(leftMax, A[i]);
    arrLeftMax[i] = leftMax;
}

let rightMax = A[A.length - 1];
arrRightMax[A.length - 1] = rightMax;
for (let i = A.length - 2; i >= 0; i--) {
    rightMax = Math.max(rightMax, A[i]);
    arrRightMax[i] = rightMax;
}

let ans = 0;
for (let i = 0; i < A.length; i++) {
    ans += Math.min(arrLeftMax[i], arrRightMax[i]) - A[i];
}

console.log(ans);