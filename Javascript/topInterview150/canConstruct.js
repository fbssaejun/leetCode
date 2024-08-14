/*
383. Ransom Note - Easy

Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.

Example 1:

Input: ransomNote = "a", magazine = "b"
Output: false
Example 2:

Input: ransomNote = "aa", magazine = "ab"
Output: false
Example 3:

Input: ransomNote = "aa", magazine = "aab"
Output: true


Constraints:

1 <= ransomNote.length, magazine.length <= 105
ransomNote and magazine consist of lowercase English letters.
*/

// Solution
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
  let magazineObj = {}

  for (let char of magazine) {
      magazineObj[char] = magazineObj[char] + 1 || 1
  }

  for (let char of ransomNote) {
      if (magazineObj[char]) {
          magazineObj[char]--
      } else {
          return false
      }
  }

  return true
};

// Time Complexity: O(n)
// Space Complexity: O(n)

// Solution
var canConstruct = function (ransomNote, magazine) {
  for (const char of magazine) {
    ransomNote = ransomNote.replace(char, "");
  }

  if (!ransomNote) return true;
  else return false;
};

// Time Complexity: O(n)
// Space Complexity: O(1)

// Test Cases
console.log(canConstruct("a", "b")) // false
console.log(canConstruct("aa", "ab")) // false
console.log(canConstruct("aa", "aab")) // true
console.log(canConstruct("aa", "aab")) // true
