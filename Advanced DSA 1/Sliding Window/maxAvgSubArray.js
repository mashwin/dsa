/**
 * You are given an integer array nums consisting of n elements, and an integer k.
 * 
 * Find a contiguous subarray whose length is equal to k that has the maximum
 * average value and return this value. Any answer with a calculation error less than
 * 10-5 will be accepted.
 */

// Test Case 1:
// let nums = [1, 12, -5, -6, 50, 3], k = 4;
// Test Case 2:
let nums = [5], k = 1;


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
    let sum = 0;
    let maxSum = Number.NEGATIVE_INFINITY;
    for (let i = 0; i < k; i++) {
        sum += nums[i];
    }

    maxSum = Math.max(maxSum, sum);
    for (let i = 1; i <= nums.length - k; i++) {
        let j = k + i - 1;
        sum = sum - nums[i - 1];
        sum = sum + nums[j];

        maxSum = Math.max(maxSum, sum);
    }

    return maxSum / k;
};

findMaxAverage(nums, k);