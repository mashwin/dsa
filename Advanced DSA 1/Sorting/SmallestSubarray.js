/**
 * Given an array of size
 * Find the smallest sub array sorting which will make the 
 * whole array sorted
 */

const A = [10, 12, 20, 30, 25, 40, 32, 31, 35, 50, 60];

const B = [...A].sort();
console.log('orig arra ', A);
console.log('sorted array ', B);

let startIdx = 0;
for (let i = 0; i < A.length; i++) {
    if (A[i] !== B[i]) {
        startIdx = i;
    }
}

let endIdx = A.length - 1;

for (let i = A.length - 1; i > 0; i--) {
    if (A[i] !== B[i]) {
        endIdx = i;
    }
}

console.log('the start and end ', startIdx, endIdx);