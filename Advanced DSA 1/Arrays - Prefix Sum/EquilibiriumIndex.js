/**
 * The equilibrium index of an array is an index such that the sum of elements
 * lower indexes is equal to the sum of elements at higher indexes.
 */

const A = [-7, 1, 5, 2, -4, 3, 0];

const equilibriumIndex = (A) => {

    // prefix sum array
    const ps = [];
    ps[0] = A[0];
    for (let i = 1; i < A.length; i++) {
        ps[i] = ps[i - 1] + A[i];
    }

    let j = 0;
    let counter = 0;
    let n = A.length;
    while (j < n) {
        let leftSum, rightSum;
        if (j === 0) {
            leftSum = 0;
        } else {
            leftSum = ps[j - 1]
        }

        if (j === n - 1) {
            rightSum = 0;
        } else {
            rightSum = ps[n - 1] - ps[j];
        }

        if (leftSum === rightSum) {
            counter += 1;
        }

        j++;
    }

    return counter;
}


const result = equilibriumIndex(A);

console.log('result: ', result);