/*

QUESTION)

Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.

Example 1:

Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2]
Example 2:

Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [9,4]
Explanation: [4,9] is also accepted.

*/


/*=======================================================1st solution====================================================================*/

const intersection = (nums1, nums2) => {
  //Initialize an empty hash table to store numbers in array as keys, repeated times as values
  let obj = {}

  //Loop through first array of numbers
  for(let num1 of nums1) {
    //If number matches from two arrays, store the number into the obj as a key / value pair, if number already exists inside the obj, add 1 to the value of the key
    if(nums2.includes(num1)) {
        obj[num1] = obj[num1] + 1 || 1
      }    
  }
  //return an array of keys from obj
  return [...Object.keys(obj)]
};


/*=======================================================2nd solution====================================================================*/

const intersection = (nums1, nums2) => {
  //Initialize an empty hash table to store numbers in array as keys, repeated times as values
  let obj = {}
  //Initialize empty array to store only the keys from obj after all for loop has run
  let arr = []
  //Loop through first array of numbers
  for(let num1 of nums1) {
      //If number matches from two arrays, store the number into the obj as a key / value pair, if number already exists inside the obj, add 1 to the value of the key
      if(nums2.includes(num1)) {
          obj[num1] = obj[num1] + 1 || 1
      }
  }
  //Loop through key from obj, push it into empty array (which would only return the key from the array, finding duplicate value), return the array
  for(let key in obj) {
      arr.push(key)
  }
  return arr
};


/*=======================================================3rd solution====================================================================*/

const intersection = (nums1, nums2) => {
  //Initialize an empty hash table to store numbers in array as keys, repeated times as values
  let obj = {}
  //Initialize empty array to store only the keys from obj after all for loop has run
  let arr = []
  //Loop through first array of numbers
  for(let num1 of nums1) {
      //Nest a for loop and loop through second array of numbers
      for(let num2 of nums2) {
          //If number matches from two arrays, store the number into the obj as a key / value pair, if number already exists inside the obj, add 1 to the value of the key
          if(num1 === num2) {
              obj[num1] = obj[num1] + 1 || 1
          }
      }
  }
  //Loop through key from obj, push it into empty array (which would only return the key from the array, finding duplicate value), return the array
  for(let key in obj) {
      arr.push(key)
  }
  return arr
};