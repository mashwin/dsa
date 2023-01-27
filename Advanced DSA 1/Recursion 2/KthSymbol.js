/**
 * On the first row, we write a 0. Now in every subsequent row,
 * we look at the previous row and replace each occurrence of 0
 * with 01, and each occurrence of 1 with 10.
 * 
 * Given row number A and index B, return the Bth indexed symbol in row A.
 */

const findKthSymbol = (N, K) => {

    if (K === 0) {
        return 0;
    }

    console.log('value of n and k ', N, K);
    let x = findKthSymbol(N - 1, Math.floor(K / 2));

    if (K % 2 === 0) {
        return x;
    } else {
        return 1 - x;
    }
}

const result = findKthSymbol(5, 5);
console.log('result ', result);