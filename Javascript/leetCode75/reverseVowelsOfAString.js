/*
345. Reverse Vowels of a String - Easy

Given a string s, reverse only all the vowels in the string and return it.

The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

Example 1:

Input: s = "hello"
Output: "holle"
Example 2:

Input: s = "leetcode"
Output: "leotcede"

Constraints:

1 <= s.length <= 3 * 105
s consist of printable ASCII characters.
*/

// Solution
/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
  // Time Complexity: O(1) for the has method.
  // Time Complexity: O(n) for the includes method.
  const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
  let result = s.split('');
  let i = 0;
  let j = s.length - 1;

  while (i < j) {
      if (!vowels.has(result[i])) {
          i++;
          continue;
      }
      if (!vowels.has(result[j])) {
          j--;
          continue;
      }

      [result[i], result[j]] = [result[j], result[i]];

      i++;
      j--;
  }

  return result.join('');
};

// Tests
console.log(reverseVowels("hello")) // => "holle"
console.log(reverseVowels("leetcode")) // => "leotcede"
console.log(reverseVowels("aA")) // => "Aa"
console.log(reverseVowels("aAa")) // => "aAa"
