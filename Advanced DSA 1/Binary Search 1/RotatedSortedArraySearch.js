/**
 * Given a sorted array of integers A of size N and an integer B.
 * array A is rotated at some pivot unknown to you beforehand.
 * 
 * You are given a target value B to search. If found in the array,
 * return its index otherwise, return -1.
 */

const binarySearch = (arr, start, end, elem) => {

    while (start <= end) {

        let mid = Math.floor((start + end) / 2);

        if (arr[mid] === elem) {
            return mid;
        } else if (elem > arr[mid]) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }

    return -1;
}

const A = [4, 5, 6, 7, 0, 1, 2, 3];
const B = 4;

let i = 1;
while (A[i] > A[i - 1]) {
    i++;
}

const result1 = binarySearch(A, 0, i - 1, B);
const result2 = binarySearch(A, i, A.length - 1, B);

console.log('result : ', result1, result2);