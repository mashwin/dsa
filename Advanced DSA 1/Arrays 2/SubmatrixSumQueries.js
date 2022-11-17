const A = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

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


