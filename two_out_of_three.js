/*

QUESTION)

Given three integer arrays nums1, nums2, and nums3, return a distinct array containing all the values that are present in at least two out of the three arrays. You may return the values in any order.
 

Example 1:

Input: nums1 = [1,1,3,2], nums2 = [2,3], nums3 = [3]
Output: [3,2]
Explanation: The values that are present in at least two arrays are:
- 3, in all three arrays.
- 2, in nums1 and nums2.
Example 2:

Input: nums1 = [3,1], nums2 = [2,3], nums3 = [1,2]
Output: [2,3,1]
Explanation: The values that are present in at least two arrays are:
- 2, in nums2 and nums3.
- 3, in nums1 and nums2.
- 1, in nums1 and nums3.
Example 3:

Input: nums1 = [1,2,2], nums2 = [4,3,3], nums3 = [5]
Output: []
Explanation: No value is present in at least two arrays.
 
Constraints:

1 <= nums1.length, nums2.length, nums3.length <= 100
1 <= nums1[i], nums2[j], nums3[k] <= 100

*/

/*=======================================================1st solution====================================================================*/

const twoOutOfThree = (nums1, nums2, nums3) => {
  //Initialize an empty array to store numbers that are appearing in more than at least two input arrays
  let arr = [];

  //Loop through each input array, check if the numbers are appearing in more than at least one other array

  for (const num of nums1) {
    if (nums2.includes(num)) {
      arr.push(num);
    } else if (nums3.includes(num)) {
      arr.push(num);
    }
  }

  for (const num1 of nums2) {
    if (nums1.includes(num1)) {
      arr.push(num1);
    } else if (nums3.includes(num1)) {
      arr.push(num1);
    }
  }

  for (const num2 of nums3) {
    if (nums1.includes(num2)) {
      arr.push(num2);
    } else if (nums2.includes(num2)) {
      arr.push(num2);
    }
  }

  //Remove duplicate values, return unique numbers in the array
  return [...new Set(arr)];
};


/*=======================================================2nd solution====================================================================*/


const twoOutOfThree = (nums1, nums2, nums3) => {
  //Combine all three arrays, store it inside a variable
  var allNums = [...nums1,...nums2,...nums3]
  //Remove alll duplicate values
  var n = [...new Set(allNums)]
  //Initialize an empty array to store numbers that appear in at least two or more arrays
  var result =[]
  //Loop through array with only unique values of numbers
  for(let i=0;i<n.length;i++){
      //Check if the number exists in at least two among the three input arrays
      if((nums1.includes(n[i]) && nums2.includes(n[i])) || (nums1.includes(n[i]) && nums3.includes(n[i])) || (nums3.includes(n[i]) && nums2.includes(n[i])) ) result.push(n[i])
  }
  //Return the result
  return result
};