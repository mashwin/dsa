/**
 * Given an array A and an integer B. A pair(i, j) in the array is a good pair if i != j and (A[i] + A[j] == B).
 * Check if any good pair exist or not.
 */

const A = [1, 2, 3, 4];
const B = 7;

// approach 1
const goodPair = (A, B) => {

    const temp = [];
    let i = 0;
    while (i < A.length) {
        let j = i + 1;
        while (j < A.length) {
            if (A[i] + A[j] === B) {
                temp.push(i);
                temp.push(j);
                break;
            }
            j++;
        }
        i++;
    }

    return temp;
}

// const result = goodPair(A, B);
// console.log('result: ', result);

// approach 2: using hashing
const goodPairHashing = (A, B) => {
    let hashMap = new Map();
    let i = 0;
    let temp = [];
    while (i < A.length) {
        let sum = B - A[i];
        if (hashMap.has(sum)) {
            temp.push(hashMap.get(sum));
            temp.push(i);
            break;
        } else {
            hashMap.set(A[i], i);
        }
        i++;
    }

    return temp;
}

const result = goodPairHashing(A, B);
console.log('result: ', result);