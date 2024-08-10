/*
2352. Equal Row and Column Pairs - Medium

Given a 0-indexed n x n integer matrix grid, return the number of pairs (ri, cj) such that row ri and column cj are equal.

A row and column pair is considered equal if they contain the same elements in the same order (i.e., an equal array).

Example 1:
Input: grid = [[3,2,1],[1,7,6],[2,7,7]]
Output: 1
Explanation: There is 1 equal row and column pair:
- (Row 2, Column 1): [2,7,7]

Example 2:
Input: grid = [[3,1,2,2],[1,4,4,5],[2,4,2,2],[2,4,2,2]]
Output: 3
Explanation: There are 3 equal row and column pairs:
- (Row 0, Column 0): [3,1,2,2]
- (Row 2, Column 2): [2,4,2,2]
- (Row 3, Column 2): [2,4,2,2]


Constraints:

n == grid.length == grid[i].length
1 <= n <= 200
1 <= grid[i][j] <= 105
*/

// Time Complexity: O(n^2)
// Space Complexity: O(n)

// Solution
/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function(grid) {
  const n = grid.length;
  let count = 0;

  // Convert rows into string format for easier comparison
  const rows = grid.map(row => row.join(','));

  for (let i = 0; i < n; i++) {
      // Construct the string for the current column
      let col = '';
      for (let j = 0; j < n; j++) {
          col += grid[j][i] + (j < n - 1 ? ',' : '');
      }

      // Compare the current column with all rows
      for (let row of rows) {
          if (row === col) {
              count++;
          }
      }
  }

  return count;
};

// Tests
console.log(equalPairs([[3,2,1],[1,7,6],[2,7,7]])); // => 1
console.log(equalPairs([[3,1,2,2],[1,4,4,5],[2,4,2,2],[2,4,2,2]])); // => 3
