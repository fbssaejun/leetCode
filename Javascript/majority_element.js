/*

QUESTION)

Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.


Example 1:

Input: nums = [3,2,3]
Output: 3
Example 2:

Input: nums = [2,2,1,1,1,2,2]
Output: 2
 

Constraints:

n == nums.length
1 <= n <= 5 * 104
-231 <= nums[i] <= 231 - 1

*/

const majorityElement = (nums) => {

  //Initialize empty object that creates a hash table with elemtns in array, counting duplicates as values.
  let obj = {};

  //Loop through input array, push key / value pairs to hash table
  for (let num of nums) {
    obj[num] = obj[num] + 1 || 1;
  }

  //Store values (repeated times) into a variable
  let valueNums = Object.values(obj);

  //Loop through object's keys
  for (let key in obj) {
    //If the value is the highest, return the key (number element in array that is the majority)
    if (obj[key] === Math.max(...valueNums)) {
      return key;
    }
  }
};
