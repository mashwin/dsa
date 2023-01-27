/**
 * Hamming distance between two non-negative integers is
 * defined as the number of positions at which the corresponding
 * bits are different.
 * 
 * 1000000007
 */

const A = [2, 4, 6];

let result = 0;
for (let i = 0; i < 32; i++) {
    let count1 = 0;
    let count0 = 0;
    for (let j = 0; j < A.length; j++) {
        if ((A[j] & (1 << i))) {
            count1 += 1;
        } else {
            count0 += 1;
        }
    }

    result += count0 * count1;
}

console.log('result ', result * 2);