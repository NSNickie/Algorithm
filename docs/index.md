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
