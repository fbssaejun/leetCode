# 338. Counting Bits - Easy
#
# Given an integer n, return an array ans of length n + 1 such that for each i (0 <= i <= n), ans[i] is the number of 1's in the binary representation of i.
#
# Example 1:
#
# Input: n = 2
# Output: [0,1,1]
# Explanation:
# 0 --> 0
# 1 --> 1
# 2 --> 10
# Example 2:
#
# Input: n = 5
# Output: [0,1,1,2,1,2]
# Explanation:
# 0 --> 0
# 1 --> 1
# 2 --> 10
# 3 --> 11
# 4 --> 100
# 5 --> 101
#
# Constraints:
#
# 0 <= n <= 105

# Solution
def count_bits(n)
  ans = Array.new(n + 1, 0)
  (1..n).each do |i|
    ans[i] = ans[i >> 1] + (i & 1)
  end
  ans
end

# Time Complexity: O(n)
# Space Complexity: O(n)

# Solution
def count_bits(n)
  ans = Array.new(n + 1)
  (0..n).each do |i|
    num_of_ones = i.to_s(2).count('1')
    ans[i] = num_of_ones
  end
  ans
end

# Time Complexity: O(n)
# Space Complexity: O(n)

# Test Cases
puts count_bits(2).inspect # [0,1,1]
puts count_bits(5).inspect # [0,1,1,2,1,2]
