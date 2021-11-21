/*

QUESTION) 

A distinct string is a string that is present only once in an array.

Given an array of strings arr, and an integer k, return the kth distinct string present in arr. If there are fewer than k distinct strings, return an empty string "".

Note that the strings are considered in the order in which they appear in the array.

Example 1:

Input: arr = ["d","b","c","b","c","a"], k = 2
Output: "a"
Explanation:
The only distinct strings in arr are "d" and "a".
"d" appears 1st, so it is the 1st distinct string.
"a" appears 2nd, so it is the 2nd distinct string.
Since k == 2, "a" is returned. 
Example 2:

Input: arr = ["aaa","aa","a"], k = 1
Output: "aaa"
Explanation:
All strings in arr are distinct, so the 1st string "aaa" is returned.
Example 3:

Input: arr = ["a","b","a"], k = 3
Output: ""
Explanation:
The only distinct string is "b". Since there are fewer than 3 distinct strings, we return an empty string "".
 

Constraints:

1 <= k <= arr.length <= 1000
1 <= arr[i].length <= 5
arr[i] consists of lowercase English letters.

*/

/*=======================================================1st solution====================================================================*/

const kthDistinct = (arr, k) => {
  //Initialize hash table to store values in an array with key/value pairs to distinguish distinct vallues
  const obj = {}
  //Initialize empty array to ONLY store distinct values in array
  let keyArr = []
  //Loop through input array, fill in hash table with key/values 
  for(let num of arr) {
    //If key already exists, add one to the value. If not, create a key with a value of 1
    obj[num] = obj[num] + 1 || 1
  }
  //Loop through keys inside obj, make an array with only distinct values
  for(let num in obj) {
    if(obj[num] === 1 ) {
      keyArr.push(num)
    }
  }
  //Return value if 'kth' element exists inside the distinct array, if not, return empty string.
  //keyArr[k-1] because: array index starts with zero, where k means kth position starting from 1 
  return keyArr[k-1] || '';

};