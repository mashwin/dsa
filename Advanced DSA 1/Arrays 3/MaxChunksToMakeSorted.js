/**
 * Given an array of integers A of size N that is a permutation of
 * [0, 1, 2, ..., (N-1)], if we split the array into some number of
 * "chunks" (partitions), and individually sort each chunk.
 * 
 * What is the most number of chunks we could have made?
 */

// const A = [1, 2, 3, 4, 0];
const A = [2, 0, 1, 3];

let count = 0;
let maxValue = 0;

for (let i = 0; i < A.length; i++) {
    if (A[i] > maxValue) {
        maxValue = A[i];
    }

    if (maxValue === i) {
        count++;
    }
}

console.log('the chunk size ', count);