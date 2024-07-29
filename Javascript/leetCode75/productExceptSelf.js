/*
238. Product of Array Except Self - Medium

Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.

Example 1:

Input: nums = [1,2,3,4]
Output: [24,12,8,6]
Example 2:

Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]


Constraints:

2 <= nums.length <= 105
-30 <= nums[i] <= 30
The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

*/

// Solution
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  let n = nums.length;
  let left = new Array(n).fill(1);
  let right = new Array(n).fill(1);
  let result = new Array(n);

  // Calculate left products
  for (let i = 1; i < n; i++) {
      left[i] = left[i - 1] * nums[i - 1];
  }

  // Calculate right products
  for (let j = n - 2; j >= 0; j--) {
      right[j] = right[j + 1] * nums[j + 1];
  }

  // Calculate result by multiplying left and right products
  for (let k = 0; k < n; k++) {
      result[k] = left[k] * right[k];
  }

  return result;
};

// Tests
console.log(productExceptSelf([1,2,3,4])) // => [24,12,8,6]
console.log(productExceptSelf([-1,1,0,-3,3])) // => [0,0,9,0,0]
console.log(productExceptSelf([1,0])) // => [0,1]
