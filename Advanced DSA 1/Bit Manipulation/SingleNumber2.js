/**
 * Given an array of integers, every element appears thrice
 * except for one, which occurs once.
 */

const A = [1, 2, 4, 3, 3, 2, 2, 3, 1, 1];

let ans = 0;
for (let i = 0; i < 32; i++) {

    let count = 0;
    for (let j = 0; j < A.length; j++) {
        if (A[j] & (1 << i)) {
            count += 1;
        }
    }

    if (count % 3 === 1) {
        ans = ans | (1 << i);
    }
}

console.log('the answer is ', ans);