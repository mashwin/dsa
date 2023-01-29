/**
 * A string is good if there are no repeated characters.
 * Given a string s​​​​​, return the number of good substrings of length three in s​​​​​​.
 * 
 * Note that if there are multiple occurrences of the same substring, 
 * every occurrence should be counted.
 */

/**
 * @param {string} s
 * @return {number}
 */
var countGoodSubstrings = function (s) {
    let count = 0;

    let a = s[0];
    let b = s[1];
    let c = s[2];
    if (a != b && b != c && a != c) {
        count += 1;
    }

    for (let i = 1; i <= s.length - 3; i++) {

        let j = 3 + i - 1;
        a = b;
        b = c;
        c = s[j];

        if (a != b && b != c && a != c) {
            count += 1;
        }
    }

    return count;
};

countGoodSubstrings('aababcabc');
countGoodSubstrings('xyzzaz');