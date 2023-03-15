/**
 * Given an integer A.
 * Compute and return the square root of A.
 * If A is not a perfect square, return floor(sqrt(A)).
 * 
 */


const squareRootOfInteger = (start, end, A) => {

    let ans = 0;
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        if (mid * mid > A) {
            end = mid - 1;
        } else {
            ans = Math.max(ans, mid);
            start = mid + 1;
        }
    }

    return ans;
}


const A = 11;
const result = squareRootOfInteger(1, A, A);
console.log('result: ', result);