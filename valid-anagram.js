//Question 

/*

Given two strings s and t, return true if t is an anagram of s, and false otherwise.

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false
 

Constraints:

1 <= s.length, t.length <= 5 * 104
s and t consist of lowercase English letters.

*/

const isAnagram = function(s, t) {
  //Returns false when both length does not match  
  return s.length !== t.length ? 
         false
         :
         //Returns boolean value if both sorted strings match
         s.split('').sort().join('') === t.split('').sort().join(''); 
  
  };