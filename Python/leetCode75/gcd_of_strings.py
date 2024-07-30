'''
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
'''

# Solution
class Solution:
    def gcdOfStrings(self, str1: str, str2: str) -> str:
        # Check if concatenated strings are equal or not, if not return ""
        if str1 + str2 != str2 + str1:
            return ""
        # If strings are equal than return the substring from 0 to gcd of size(str1), size(str2)
        from math import gcd
        return str1[:gcd(len(str1), len(str2))]

# Tests:
solution = Solution()
print(solution.gcdOfStrings("ABAB", "ABABAB"))  # => "AB"
print(solution.gcdOfStrings("ABAB", "ABABABAB"))  # => "ABAB"
print(solution.gcdOfStrings("ABC", "ABCABC"))  # => "ABC"
print(solution.gcdOfStrings("ABCABC", "ABCABC"))  # => "ABCABC"
print(solution.gcdOfStrings("TAUXXTAUXX", "TAUXXTAUXXTAUXXTAUXX"))  # => "TAUXX"
print(solution.gcdOfStrings("LEET", "CODE"))  # => ""
print(solution.gcdOfStrings("AAAAAAAAA", "AAACCC"))  # => ""
