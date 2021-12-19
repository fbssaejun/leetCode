/*

QUESTION)

Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.


Example 1:

Input: nums = [3,0,1]
Output: 2
Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.

Example 2:

Input: nums = [0,1]
Output: 2
Explanation: n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 2 is the missing number in the range since it does not appear in nums.

Example 3:

Input: nums = [9,6,4,2,3,5,7,0,1]
Output: 8
Explanation: n = 9 since there are 9 numbers, so all numbers are in the range [0,9]. 8 is the missing number in the range since it does not appear in nums.

Constraints:

n == nums.length
1 <= n <= 104
0 <= nums[i] <= n
All the numbers of nums are unique.

*/

/*=======================================================1st solution====================================================================*/

const missingNumber = (nums) => {
  //Create an empty array to store all numbers according to the length of the input array
  let arr = [];

  //Push numbers within the range to empty arr
  for (let i = 0; i <= nums.length; i++) {
    arr.push(i);
  }

  //Sort two arrays to ascending order 
  let arr1 = arr.sort((a, b) => a - b);
  let arr2 = nums.sort((a, b) => a - b);

  //Loop according to the original(the proper array with all numbers in the range) array's length
  for (let i = 0; i < arr1.length; i++) {
    //If the current number does not match the other array(input array), return the number since that is the missing number
    if (arr1[i] !== arr2[i]) {
      return i;
    }
  }
};
