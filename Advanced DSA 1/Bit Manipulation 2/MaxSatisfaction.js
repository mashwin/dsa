
// A = [10, 20, 15, 4, 14];
const A = [2, 2, 7, 15];

function check(k) {
    let count = 0;
    for (let j = 0; j <= A.length; j++) {
        if ((A[j] & k) === k) {
            count += 1;
        }
    }

    if (count >= 4) {
        return true;
    }

    return false;
}

let ans = 0;
for (let i = 31; i >= 0; i--) {
    let temp = ans | (1 << i);
    if (check(temp)) {
        ans = temp;
    }
}

