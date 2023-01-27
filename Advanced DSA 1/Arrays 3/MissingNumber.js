

// const A = [3, 0, 1];
const A = [0, 1];
let n = A.length;

for (let i = 0; i < n; i++) {
    if (A[i] >= 0 && A[i] < n) {
        if (A[i] === i) {
            // handle normal case
            continue;
        } else if (A[i] === A[A[i]]) {
            // handle duplicate element case
            continue;
        } else {
            let temp = A[A[i]];
            A[A[i]] = A[i];
            A[i] = temp;
            i--;
        }
    }
}

console.log('the nums array ', A);

for (let i = 0; i < A.length; i++) {
    if (A[i] !== i) {
        console.log(i);
        break;
    }
}

// if there s nothing return n