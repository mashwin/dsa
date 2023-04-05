

const A = [4, 3, -1, 5];
// time complexity is O(n3)
let maxSum = Number.NEGATIVE_INFINITY;
for (let i = 0; i < A.length; i++) {
    for (let j = i; j < A.length; j++) {
        let sum = 0;
        for (let k = i; k <= j; k++) {
            sum += A[k];
            if (sum > maxSum) {
                maxSum = sum;
            }
        }
    }
}

console.log('max sum ', maxSum);

// time complexity is O(n2)
maxSum = Number.NEGATIVE_INFINITY;
for (let i = 0; i < A.length; i++) {
    let sum = 0;
    for (let j = i; j < A.length; j++) {
        sum += A[j];
        if (sum > maxSum) {
            maxSum = sum;
        }
    }
}

console.log('max sum ', maxSum);

