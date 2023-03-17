/**
 * 
 * 
 */

const A = [1, 2, 3, 4, 5];
const reverseArray = (A) => {

    let i = 0;
    let j = A.length - 1;

    while (i <= j) {
        let temp = A[i];
        A[i] = A[j];
        A[j] = temp;
        i++;
        j--;
    }

    return A;
}

const result = reverseArray(A);

console.log('result: ', A);