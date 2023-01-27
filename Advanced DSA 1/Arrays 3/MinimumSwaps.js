/**
 * Given an array of integers A of size N that is a 
 * permutation of [0, 1, 2, ..., (N-1)].
 * 
 * Find the minimum number of swaps required to sort 
 * the array in ascending order.
 */


// const vi = [];
// for (let i = 0; i < A.length; i++) {
//     const obj = {};
//     obj.element = A[i];
//     obj.index = i;
//     vi.push(obj);
// }

// vi.sort((obj1, obj2) => obj1.element - obj2.element);

// let counter = 0;
// for (let j = 0; j < vi.length; j++) {
//     if (vi[j].index === j) {
//         continue;
//     } else {
//         let temp = vi[vi[j].index];
//         vi[vi[j].index] = vi[j];
//         vi[j] = temp;
//         j = j - 1;
//         counter = counter + 1;
//     }
// }

// return counter;


// const A = [1, 2, 3, 4, 0];

const A = [2, 0, 1, 3];

let count = 0;
let i = 0;
while (i < A.length) {
    if (!(A[i] === i)) {
        let temp = A[A[i]];
        A[A[i]] = A[i];
        A[i] = temp;
        i--;
    }
    i++;
}