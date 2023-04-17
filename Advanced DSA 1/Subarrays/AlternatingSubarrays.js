/**
 * You are given an integer array A of length N comprising of 0's & 1's, and an 
 * integer B.
 * You have to tell all the indices of array A that can act as a 
 * center of 2 * B + 1 length 0-1 alternating subarray.
 * 
 * A 0-1 alternating array is an array containing only 0's & 1's, and 
 * having no adjacent 0's or 1's.
 * 
 * For e.g. arrays [0, 1, 0, 1], [1, 0] and [1] are 0-1 alternating, 
 * while [1, 1] and [0, 1, 0, 0, 1] are not.
 */

const alternatingSubarrays = (A, B) => {

    const lenOfSubarray = 2 * B + 1;
    const N = A.length;
    let ans = [];
    for (let i = 0; i < N - lenOfSubarray + 1; i++) {
        let flag = 1;
        let prev = -1;
        for (let j = i; j < i + lenOfSubarray; j++) {
            if (A[j] === prev) {
                flag = 0;
                break;
            }
        }
        if (flag === 1) {
            ans.push(i + B);
        }
    }

    return ans;
}

const A = [1, 0, 1, 0, 1];
const B = 1;

const result = alternatingSubarrays(A, B);

console.log('result: ', result);