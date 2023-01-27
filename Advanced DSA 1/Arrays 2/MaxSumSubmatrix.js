const A = [
    [0, -2, -7, 0],
    [9, 2, -6, 2],
    [-4, 1, -4, 1],
    [-1, 8, 0, -2]
];

const rows = A.length;
const cols = A[0].length;
let maxSum = Number.NEGATIVE_INFINITY;

// Brute force approach
for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
        for (let k = i; k < rows; k++) {
            for (let l = j; l < cols; l++) {

                let sum = 0;
                for (m = i; m <= k; m++) {
                    for (n = j; n <= l; n++) {
                        sum += A[m][n];
                    }
                }

                if (sum > maxSum) {
                    maxSum = sum;
                }
            }
        }
    }
}

console.log('maximum sum is ', maxSum);

// Optimal approach
let max = Number.NEGATIVE_INFINITY;
const arr = [];

for (let i = 0; i < rows; i++) {
    const arr = [];
    for (let i = 0; i < cols; i++) {
        arr[i] = 0;
    }
    for (let j = i; j < rows; j++) {
        for (let c = 0; c < cols; c++) {
            arr[c] = arr[c] + A[j][c];
        }

        let currentSum = 0;
        for (let k = 0; k < arr.length; k++) {
            currentSum += arr[k];
            if (currentSum > max) {
                max = currentSum;
            }

            if (currentSum < 0) {
                currentSum = 0;
            }
        }
    }
}

console.log('maximum sum is ', max);