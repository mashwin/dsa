/**
 * Given an array A of size N. You have to handle Q queries of 
 * the form
 * L R - Answer 1 if the subarray of A from index L to R is 
 * sorted else answer 0.
 * 
 * Given a 2D integer array B which represents the queries, 
 * where the ith query is 
 * B[i][0] = L, B[i][1] = R.
 * 
 * Return an integer array representing the answer to the queries in input order.
 */

// const A = [-9, -30, 28, 14, -10, 16, 14, -6, -25];
// const B = [[3, 8], [1, 1], [7, 8]];

const A = [3, 20, -6, 28];
const B = [[3, 4], [2, 3], [4, 4]];

const temp = [];
for (let i = 0; i < B.length; i++) {

    let start = B[i][0];
    let end = B[i][1];

    if (start - end === 0) {
        temp.push(1);
    } else {
        let flg = 0;
        for (let j = start - 1; j <= end - 1; j++) {
            if (A[j] > A[j + 1]) {
                temp.push(0);
                flg = 1;
                break;
            }
        }
        if (flg === 0) {
            temp.push(1);
        }
    }
}

console.log('the temp ', temp);