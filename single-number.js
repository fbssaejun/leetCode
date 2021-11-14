/*

Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
You must implement a solution with a linear runtime complexity and use only constant extra space.

Example 1:

Input: nums = [2,2,1]
Output: 1
Example 2:

Input: nums = [4,1,2,1,2]
Output: 4
Example 3:

Input: nums = [1]
Output: 1

*/

//Takes in array of numbers and returns a number that wasn't repeated in the array
const singleNumber = (nums) => {
  //Initialize a hash table that would contain each numbers in nums array as key, and repeated times as value
  let obj = {}
  //Loop through nums array, create hash table
  for(let num of nums) {
      obj[num] = obj[num] + 1 || 1
  }
  //Loop through keys inside hash table, look for a key that has a value of 1, if yes, return the key(number)
  for(let key in obj) {
      if(obj[key] === 1) {
          return key
      }
  }
};