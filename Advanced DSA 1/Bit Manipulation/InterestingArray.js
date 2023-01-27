/**
 * You have an array A with N elements.
 * 
 * We can split an element B into two elements, C and D, such that B = C + D.
 * We can merge two elements, P and Q, to one element, R, such that R = P ^ Q i.e., XOR of P and Q.
 */

// const A = [9, 17];
const A = [1];

let count = 0;
for (let i = 0; i < A.length; i++) {
    if (A[i] % 2 === 1) {
        count += 1;
    }
}

if (count % 2 === 0) {
    console.log('Yes');
} else {
    console.log('No');
}