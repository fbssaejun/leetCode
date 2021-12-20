/*

QUESTION)

Given an integer array nums, return the greatest common divisor of the smallest number and largest number in nums.

The greatest common divisor of two numbers is the largest positive integer that evenly divides both numbers.

Example 1:

Input: nums = [2,5,6,9,10]
Output: 2
Explanation:
The smallest number in nums is 2.
The largest number in nums is 10.
The greatest common divisor of 2 and 10 is 2.

Example 2:

Input: nums = [7,5,6,8,3]
Output: 1
Explanation:
The smallest number in nums is 3.
The largest number in nums is 8.
The greatest common divisor of 3 and 8 is 1.

Constraints:

2 <= nums.length <= 1000
1 <= nums[i] <= 1000

*/

const findGCD = (nums) => {
  //Declare two variables with the minimum and maximum value of the input array
  const min = Math.min(...nums);
  const max = Math.max(...nums);

  //Initialize empty array to store common division of two min and max numbers
  let commonDivisions = [];

  //Loop until i reaches the max value
  for (let i = 0; i <= max; i++) {
    //If common division is found, push it to arr
    if (max % i === 0 && min % i === 0) {
      commonDivisions.push(i);
    }
  }

  //Return the maximum value of the common division array
  return Math.max(...commonDivisions);
};
