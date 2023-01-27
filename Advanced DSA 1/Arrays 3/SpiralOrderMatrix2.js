const A = 1;
const arr = [];

for (let i = 0; i < A; i++) {
    const temp = [];
    for (let j = 0; j < A; j++) {
        temp.push(0);
    }
    arr.push(temp);
}

count = 1;

let left = 0
let right = A - 1;
let top = 0;
let bottom = A - 1;
let dir = 0;

console.log('the arr ', arr);

while (top <= bottom && left <= right) {

    if (dir === 0) {
        for (let i = top; i <= right; i++) {
            arr[top][i] = count++;
        }

        dir = 1;
        top++;
    }

    if (dir === 1) {
        for (let i = top; i <= bottom; i++) {
            arr[i][right] = count++;
        }

        dir = 2;
        right--;
    }

    if (dir === 2) {
        for (let i = right; i >= left; i--) {
            arr[bottom][i] = count++;
        }

        dir = 3;
        bottom--;
    }

    if (dir === 3) {
        for (let i = bottom; i >= top; i--) {
            arr[i][left] = count++;
        }

        dir = 0;
        left++;
    }
}

console.log('the new array ', arr);