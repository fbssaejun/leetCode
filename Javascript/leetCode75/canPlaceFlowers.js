/*
605. Can Place Flowers - Easy

You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.

Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.



Example 1:

Input: flowerbed = [1,0,0,0,1], n = 1
Output: true
Example 2:

Input: flowerbed = [1,0,0,0,1], n = 2
Output: false


Constraints:

1 <= flowerbed.length <= 2 * 104
flowerbed[i] is 0 or 1.
There are no two adjacent flowers in flowerbed.
0 <= n <= flowerbed.length
*/

// Solution

/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
  let availablePlots = 0;
  let newbed = [...flowerbed]
  // if only 1 plot and it's 0, you can place flowers
  if (flowerbed.length === 1 && flowerbed[0] === 0) {
      return true
  }
  // first element is 0, if next is 0, you can place flowers
  if (flowerbed[0] === 0 && flowerbed[1] === 0) {
      availablePlots += 1
      newbed[0] = 1
  }
  // check past and next element
  // if both are 0, you can place flowers
  for (let i = 1; i < newbed.length - 1; i++) {
      if (newbed[i] === 0 && newbed[i - 1] === 0 && newbed[i+1] === 0) {
          availablePlots += 1
          newbed[i] = 1
      }
  }
  // last element, if previous is 0, you can place flowers
  if (newbed[newbed.length - 1] === 0 && newbed[newbed.length - 2] === 0) {
      availablePlots += 1
  }
  // if available plots is bigger or equal to "n", true, else false
  return availablePlots >= n ? true : false
};
