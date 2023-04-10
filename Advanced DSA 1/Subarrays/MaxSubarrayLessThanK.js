/**
 * You are given an integer array C of size A. Now you need to
 * find a subarray (contiguous elements) so that the sum of
 * contiguous elements is maximum.
 * 
 * But the sum must not exceed B.
 * 
 */

const A = 5;
const B = 12;
const C = [2, 1, 3, 4, 5];

const maxSubarray = (A, B, C) => {

    let ans = Number.NEGATIVE_INFINITY;
    for (let i = 0; i < C.length; i++) {
        let sum = 0;
        for (let j = i; j < C.length; j++) {
            sum += C[j];
            if (sum <= B) {
                if (sum > ans) {
                    ans = sum;
                }
            }
        }
    }

    return ans;
}

const result = maxSubarray(A, B, C);
console.log('result: ', result);