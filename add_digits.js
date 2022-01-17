/*

QUESTION)

Given an integer num, repeatedly add all its digits until the result has only one digit, and return it.

Example 1:

Input: num = 38
Output: 2
Explanation: The process is
38 --> 3 + 8 --> 11
11 --> 1 + 1 --> 2 
Since 2 has only one digit, return it.
Example 2:

Input: num = 0
Output: 0
 

Constraints:

0 <= num <= 231 - 1

*/

/*=======================================================1st solution====================================================================*/


const addDigits = (num) => {
  //If number is only 1 digit number, return the number
  if (num < 10) return num;
  //9 modulo 9 willl always be 0, if so, return 9, 
  //if not, return the modulo of 9 : modulo of 9 will always be the remainder of all the digits summed up from a number that is more than 1 digit divided by 9

  //Ex ) 12,345 = 1 × (9,999 + 1) + 2 × (999 + 1) + 3 × (99 + 1) + 4 × (9 + 1) + 5.
  // 12,345 = (1 × 9,999 + 2 × 999 + 3 × 99 + 4 × 9) + (1 + 2 + 3 + 4 + 5).
  return num % 9 === 0 ? 9 : num % 9;
};