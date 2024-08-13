/*
724. Find Pivot Index - Easy

Given an array of integers nums, calculate the pivot index of this array.

The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right.

If the index is on the left edge of the array, then the left sum is 0 because there are no elements to the left. This also applies to the right edge of the array.

Return the leftmost pivot index. If no such index exists, return -1.

Example 1:

Input: nums = [1,7,3,6,5,6]
Output: 3
Explanation:
The pivot index is 3.
Left sum = nums[0] + nums[1] + nums[2] = 1 + 7 + 3 = 11
Right sum = nums[4] + nums[5] = 5 + 6 = 11
Example 2:

Input: nums = [1,2,3]
Output: -1
Explanation:
There is no index that satisfies the conditions in the problem statement.
Example 3:

Input: nums = [2,1,-1]
Output: 0
Explanation:
The pivot index is 0.
Left sum = 0 (no elements to the left of index 0)
Right sum = nums[1] + nums[2] = 1 + -1 = 0

Constraints:

1 <= nums.length <= 104
-1000 <= nums[i] <= 1000
*/

// Solution
// Time Complexity : O(n)
/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
  // Initialize total sum of the given array...
  let totalSum = 0
  // Traverse the elements and add them to store the totalSum...
  for(let i = 0; i < nums.length; i++) {
      totalSum += nums[i]
  }
  // Initialize 'leftsum' as sum of first i numbers, not including nums[i]...
  let leftSum = 0
  // Again traverse all the elements through the for loop and store the sum of i numbers from left to right...
  for (let i = 0; i < nums.length; i++) {
      // sum to the left == leftsum.
      // sum to the right === totalSum - leftsum - nums[i]..
      // check if leftsum == totalSum - leftsum - nums[i]...
      if (leftSum * 2 == totalSum - nums[i])
          return i;       // Return the pivot index...
      leftSum += nums[i]
  }
  return -1      // If there is no index that satisfies the conditions in the problem statement...
};

// Time Complexity: O(n)
// Space Complexity: O(1)

// Solution
/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
  let leftSum = 0
  let rightSum = 0

  for (let i = 0; i < nums.length; i++) {
      for(let j = i + 1; j < nums.length; j++) {
          rightSum += nums[j]
      }

      for(let k = i - 1; k >= 0; k--) {
          leftSum += nums[k]
      }

      if (leftSum === rightSum) {
          return i
      } else {
          leftSum = 0
          rightSum = 0
      }
  }

  return -1
};

// Time Complexity: O(n^2)
// Space Complexity: O(1)

// Tests
console.log(pivotIndex([1,7,3,6,5,6])) // 3
console.log(pivotIndex([1,2,3])) // -1
console.log(pivotIndex([2,1,-1])) // 0
