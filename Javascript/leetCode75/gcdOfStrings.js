/*
1071. Greatest Common Divisor of Strings - Easy

For two strings s and t, we say "t divides s" if and only if s = t + t + t + ... + t + t (i.e., t is concatenated with itself one or more times).

Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.

Example 1:

Input: str1 = "ABCABC", str2 = "ABC"
Output: "ABC"
Example 2:

Input: str1 = "ABABAB", str2 = "ABAB"
Output: "AB"
Example 3:

Input: str1 = "LEET", str2 = "CODE"
Output: ""

Constraints:
1 <= str1.length, str2.length <= 1000
str1 and str2 consist of English uppercase letters.
*/

// Solution
/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
const gcdOfStrings = (str1, str2) => {
  if (str1 + str2 !== str2 + str1) return '';
  const gcd = (a, b) => (0 === b ? a : gcd(b, a % b));
  return str1.substring(0, gcd(str1.length, str2.length));
};

// Explanation:
/*
Example of computing GCD using the Euclidean algorithm:
Initial values: a = 4, b = 2
Repeat the process:

Compute a % b = 4 % 2 = 0
Replace a with b and b with a % b:
New values: a = 2, b = 0
At this point, since b = 0, the GCD is a, which is 2.
*/

//Tests:
console.log(gcdOfStrings("ABAB", "ABABAB")) // => "AB"
console.log(gcdOfStrings("ABAB", "ABABABAB")) // => "ABAB"
console.log(gcdOfStrings("ABC", "ABCABC")) // => "ABC"
console.log(gcdOfStrings("ABCABC", "ABCABC")) // => "ABCABC"
console.log(gcdOfStrings("TAUXXTAUXX", "TAUXXTAUXXTAUXXTAUXX")) // => "TAUXX"
console.log(gcdOfStrings("LEET", "CODE")) // => ""
console.log(gcdOfStrings("AAAAAAAAA", "AAACCC")) // => ""
