/* 

QUESTION) 

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.   

*/


const twoSum = (nums, target) => {

  //initialize varialbe for storing temporary values from array
  let placeHolder = {};
  
  //Loop through array with each element's index
  for(let [index, num] of nums.entries()) {
      //check if placeHolder has current number key stored already, if yes, it means it matches the total sum of target, 
      //which now could return the array of each index of the sum. 
      if(placeHolder[num] !== undefined) return [placeHolder[num], index];
      //If not, add the value of current element subtracted  from target as key, and the index as value to placeholder.
      placeHolder[target-num] = index;
  }
};
