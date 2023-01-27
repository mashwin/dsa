const A = [
    [1, 1, 1, 1, 1],
    [2, 2, 2, 2, 2],
    [3, 8, 6, 7, 3],
    [4, 4, 4, 4, 4],
    [5, 5, 5, 5, 5]
]

const B = 3;

let ans = Number.NEGATIVE_INFINITY;
let sum = 0;
const N = A.length;

const rows = A.length;
const cols = A[0].length;
let PF = Array(rows).fill().map(() => Array(cols).fill(0));

// row wise sum
for (let i = 0; i < rows; i++) {
    PF[i][0] = A[i][0]
    for (let j = 1; j < cols; j++) {
        PF[i][j] = PF[i][j - 1] + A[i][j];
    }
}

// column wise sum
for (let j = 0; j < cols; j++) {
    for (let i = 1; i < rows; i++) {
        PF[i][j] = PF[i - 1][j] + PF[i][j];
    }
}

console.log('prefix sum array ', PF);

for (let i = B - 1; i < N; i++) {
    for (let j = B - 1; j < N; j++) {
        let sum = PF[i][j];
        if (i - B >= 0) {
            sum = sum - PF[i - B][j];
        }
        if (j - B >= 0) {
            sum = sum - PF[i][j - B];
        }
        if (i - B >= 0 && j - B >= 0) {
            sum = sum + PF[i - B][j - B];
        }

        if (sum > ans) {
            ans = sum;
        }
    }
}

console.log('*** the ans ', ans);
