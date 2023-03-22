/**
 * Given an array of integers A and multiple values in B, which
 * represents the number of times array A needs to be left
 * rotated.
 */

const reverseArray = (arr, start, end) => {

    while (start < end) {
        let temp = arr[end];
        arr[end] = arr[start];
        arr[start] = temp;
        start++;
        end--;
    }
}

const A = [1, 2, 3, 4, 5];
const B = [2, 3];

// const A = [5, 17, 100, 11]
// const B = [1]

let result = [];
for (let i = 0; i < B.length; i++) {
    let k = B[i];
    k = k % A.length;
    let arr = [...A];

    reverseArray(arr, 0, arr.length - 1);
    reverseArray(arr, 0, arr.length - k - 1);
    reverseArray(arr, arr.length - k, arr.length - 1);

    result.push(arr);
}

console.log('result: ', result);