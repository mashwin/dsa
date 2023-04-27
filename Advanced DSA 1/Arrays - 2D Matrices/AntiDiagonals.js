/**
 * Give a N * N square matrix A, return an array of its anti-diagonals.
 * 
 */


// const A = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
// ];

const A = [
    [1, 2],
    [3, 4],
];

const antiDiagonals = (A) => {
    const rows = A.length;
    const cols = A[0].length;

    const ans = [];
    for (let i = 0; i < cols; i++) {

        let col = i;
        let row = 0;
        const temp = [];
        while (col >= 0) {
            temp.push(A[row][col]);
            row++;
            col--;
        }

        let j = temp.length;
        while (j < cols) {
            temp.push(0);
            j++;
        }

        ans.push(temp);
    }

    for (let i = 1; i < A.length; i++) {

        let row = i;
        let col = A.length - 1;
        const temp = [];
        while (row < A.length) {
            temp.push(A[row][col]);
            row++;
            col--;
        }

        let j = temp.length;
        while (j < cols) {
            temp.push(0);
            j++;
        }

        ans.push(temp);
    }

    return ans;
}

const result = antiDiagonals(A);
console.log('result: ', result);