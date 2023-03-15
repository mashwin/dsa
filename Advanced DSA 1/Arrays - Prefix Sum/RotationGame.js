/**
 * Given an integer array A of size N and an integer B, you have
 * to print the same array after rotating it B times towards the
 * right
 */

const A = [1, 2, 3, 4];
const B = 2;

const rotateArray = (A, B) => {

    for (let i = 1; i <= B; i++) {
        let poppedElem = A.pop();
        A.unshift(poppedElem);
    }

    return A;
}

const result = rotateArray(A, B);

console.log('result: ', result);