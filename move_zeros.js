/*

QUESTION)

Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

Example 1:

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
Example 2:

Input: nums = [0]
Output: [0]

*/

/*=======================================================1st solution====================================================================*/

const moveZeroes = (nums) => {
  //Reverse loop through input array
  for (let i = nums.length - 1; i >= 0; i--) {
    //if element is 0, push 0 to the end of the input array, remove the element
    if (nums[i] === 0) {
      nums.push(0);
      nums.splice(i, 1);
    }
  }

  return nums;
};
