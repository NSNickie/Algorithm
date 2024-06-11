# Backtrace

## 131.Palindrome Partitioning

Given a string s, partition s such that every substring of the partition is a palindrome. Return all possible palindrome partitioning of s.

> **Example 1**:  
> Input: s = "aab"  
> Output: [["a","a","b"],["aa","b"]]

> **Example 1**:  
> Input: s = "aab"  
> Output: [["a","a","b"],["aa","b"]]

> Constraints:  
> 1 <= s.length <= 16  
> s contains only lowercase English letters.

### Thought

Three steps of backtracking problem:

1. What is the current problem?
2. What is the subproblem?
3. What is the next subproblem?

This problem is one of the **subset** problems. In this case we can process the original string into a split array with commas. For example, 'aab' is equivalent to [a,a,b]. Then our solution is to choose or not to choose the comma between each character.

Thus, the three steps are:

1. Choose or not to choose the comma between i and i+1 number.
2. Choose or not to choose the comma between start and i+1+1 number.
3. Do the same thing between the new start and start+1.

```javascript
function dfs(i, start) {
  if (i === length) {
    result.push(path.slice());
  }

  //Don't choose the comma between i and i+1 number
  if (i < length - 1) {
    dfs(i + 1, start);
  }

  //chose the comma, which means we choose the substring between start and i
  //before that, check if the substring is palindrome
  if (isPlindrome(str, start, i)) {
    path.push(s.substring(start, i + 1));
    dfs(i + 1, i + 1);
    path.pop();
  }
}
```

## 51.N-Queens

The n-queens puzzle is the problem of placing n queens on an n x n chessboard such that no two queens attack each other.

Given an integer n, return all distinct solutions to the n-queens puzzle. You may return the answer in any order.

Each solution contains a distinct board configuration of the n-queens' placement, where 'Q' and '.' both indicate a queen and an empty space, respectively.

![Queens](../public/queens.jpg)

### Thought

Check every column of every rows. If the block can be placed with chess, place it and go deeper to next row. When the recursion is over, reset the block with '.'.

```javascript
function dfs(row) {
  if (row === n) {
    result.push(path.map((row) => row.join("")));
    return;
  }

  for (let col = 0; col < n; col++) {
    if (canPlace(row, col)) {
      path[row][col] = "Q";
      dfs(row + 1);
      path[row][col] = ".";
    }
  }
}
```

#### Main Diagonal (\\ Diagonal)

The main diagonal refers to the diagonal from the top left to the bottom right of a grid. In a two-dimensional array, all elements on the main diagonal have the same row-column difference, i.e., `row-col` is constant. For example, in a 4\*4 board:

```
[Q, ., ., .]
[., Q, ., .]
[., ., Q, .]
[., ., ., Q]
```

Each Q is on the main diagonal. Their `(row,col)` differences are `(0-0),(1-1),(2-2),(3-3)`, which means each difference is 0.

#### Anti-Diagonal (/ Diagonal)

The anti-diagonal refers to the diagonal from the top right to the bottom left of a grid. In a two-dimensional array, all elements on the anti-diagonal have the same `row-column` sum, i.e., `row + col` is constant. For example, in a 4x4 board:

```
[., ., ., Q]
[., ., Q, .]
[., Q, ., .]
[Q, ., ., .]
```

Each Q is on the anti-diagonal. Their (row, col) sums are (0+3), (1+2), (2+1), (3+0), which means each sum is 3.

Thus we can optimize our code:

```javascript
function dfs(row) {
  if (row === n) {
    result.push(path.map((row) => row.join("")));
    return;
  }

  for (let col = 0; col < n; col++) {
    if (cols[col] || diag1[row - col + n - 1] || diag2[row + col]) {
      continue;
    }

    path[row][col] = "Q";
    cols[col] = true;
    diag1[row - col + n - 1] = true;
    diag2[row + col] = true;

    dfs(row + 1);

    path[row][col] = ".";
    cols[col] = false;
    diag1[row - col + n - 1] = false;
    diag2[row + col] = false;
  }
}

dfs(0);
return result;
```
