/**
 * Given an array A of N integers where the i-th element
 * represent the number of chocolates in the i-th packet.
 * There are B number of students, the task is to distribute
 * chocolate packets following below conditions:
 * 
 * 1. Each student gets one packets.
 * 2. The difference between the number of chocolates given to any two students is minimum.
 * 
 * Return the minimum difference (that can be achieved) between the student who gets 
 * minimum number of chocolates and the student who gets maximum number of chocolates.
 * 
 */

const A = [3, 4, 1, 9, 56, 7, 9, 12]
const B = 5;

A.sort((a, b) => a - b);
let minDiff = Number.POSITIVE_INFINITY;
for (let i = 0; i + B - 1 < A.length; i++) {
    if (A[i + B - 1] - A[i] < minDiff) {
        minDiff = A[i + B - 1] - A[i];
    }
}

console.log('result: ', minDiff);