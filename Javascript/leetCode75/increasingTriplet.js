/*
334. Increasing Triplet Subsequence - Medium

Given an integer array nums, return true if there exists a triple of indices (i, j, k) such that i < j < k and nums[i] < nums[j] < nums[k]. If no such indices exists, return false.

Example 1:

Input: nums = [1,2,3,4,5]
Output: true
Explanation: Any triplet where i < j < k is valid.
Example 2:

Input: nums = [5,4,3,2,1]
Output: false
Explanation: No triplet exists.
Example 3:

Input: nums = [2,1,5,0,4,6]
Output: true
Explanation: The triplet (3, 4, 5) is valid because nums[3] == 0 < nums[4] == 4 < nums[5] == 6.

Constraints:

1 <= nums.length <= 5 * 105
-231 <= nums[i] <= 231 - 1
*/

// Solution
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
  // Start with two largest values, as soon as we find a number bigger than both, while both have been updated, return true.
  let small = Infinity
  let big = Infinity

  for(num of nums) {
      if(num <= small) {
          small = num
      } else if(num <= big) {
          big = num
      } else {
        // return if you find a number bigger than both
          return true
      }
  }
  return false
}

// Tests
console.log(increasingTriplet([1,2,3,4,5])) // => true
console.log(increasingTriplet([5,4,3,2,1])) // => false
console.log(increasingTriplet([2,1,5,0,4,6])) // => true
console.log(increasingTriplet([5,1,5,5,2,5,4])) // => true
