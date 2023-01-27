const matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
];

let row = matrix.length;
let col = matrix[0].length;
let left = 0;
let right = col - 1;
let top = 0;
let bottom = row - 1;
const arr = [];
let dir = 0;

while (top <= bottom && left <= right) {
    if (dir === 0) {
        for (let i = left; i <= right; i++) {
            arr.push(matrix[left][i]);
        }
        dir = 1;
        top++
    } else if (dir === 1) {
        for (let i = top; i <= bottom; i++) {
            arr.push(matrix[i][right]);
        }
        dir = 2;
        right--;
    } else if (dir === 2) {
        for (let i = right; i >= left; i--) {
            arr.push(matrix[bottom][i]);
        }
        dir = 3;
        bottom--;
    } else if (dir === 3) {
        for (let i = bottom; i >= top; i--) {
            arr.push(matrix[i][left]);
        }
        dir = 0;
        left++;
    }
}

console.log('the final array ', arr);