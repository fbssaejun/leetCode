/*

QUESTION)

Given an integer array arr, return true if there are three consecutive odd numbers in the array. Otherwise, return false.
 
Example 1:

Input: arr = [2,6,4,1]
Output: false
Explanation: There are no three consecutive odds.
Example 2:

Input: arr = [1,2,34,3,4,5,7,23,12]
Output: true
Explanation: [5,7,23] are three consecutive odds.
 

Constraints:

1 <= arr.length <= 1000
1 <= arr[i] <= 1000

*/

/*=======================================================1st solution====================================================================*/

const threeConsecutiveOdds = (arr) =>
  arr
    //Map through each number, return the modulus of 2 (Odd numbers will always have remainder of '1')
    .map((n) => n % 2)
    //Join the numbers as string
    .join("")
    //If the final string includes three '1's, it means it has three consecutive odds
    .includes("111");

/*=======================================================2nd solution====================================================================*/

const threeConsecutiveOdds = (arr) => {
  //Initialize counter variable to count odd numbers
  let counter = 0;

  //Loop  through numbers in input array
  for (let num of arr) {
    //Check if there has been three consecutive odd numbers, if yes, return true right away, if not, continue
    if (counter >= 3) {
      return true;
    }

    //Increment counter if odd number has been found
    if (num % 2 !== 0) {
      counter++;
      //If not, reset counter
    } else {
      counter = 0;
    }
  }

  //After looping through all numbers, if counter is bigger than 3 , return true, else false
  if (counter >= 3) {
    return true;
  }
  return false;
};
