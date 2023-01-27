
const A = "1010";
const B = "1011";

// const A = "100";
// const B = "11";

// const A = "110";
// const B = "10";

let carry = 0;
let result = "";
let i = A.length - 1;
let j = B.length - 1;

while (i >= 0 || j >= 0) {

    let sum = 0;
    if (A[i] !== undefined) {
        sum += parseInt(A[i]);
    }

    if (B[j] !== undefined) {
        sum += parseInt(B[j]);
    }

    sum += carry;

    if (sum > 0) {
        if (sum === 2) {
            result += 0;
            carry = 1;
        } else if (sum === 1) {
            result += 1;
            carry = 0;
        }
    } else {
        result += 0;
        carry = 0;
    }

    i--;
    j--;
}

console.log('the result ', result, carry);
