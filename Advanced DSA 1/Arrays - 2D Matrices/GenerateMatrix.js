/**
 * Given a value n generate n by n matrix
 */

const n = 4;

const ans = [];
for (let i = 0; i < n; i++) {
    const temp = [];
    for (let j = 0; j < n; j++) {
        temp.push(0);
    }
    ans.push(temp);
};

let count = 1;
for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        ans[i][j] = count;
        count++;
    }
}

console.log('result: ', ans);