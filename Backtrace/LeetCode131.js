/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
    const result = []
    const path = []
    const length = s.length
    function isPalindrome(str, left, right) {
        while (left < right) {
            if (str.charAt(left++) !== str.charAt(right--)) {
                return false
            }
        }
        return true
    }

    function dfs(i, start) {
        if (i === length) {
            result.push(path.slice())
            return
        }
        //don't choose
        if (i < length - 1) {
            dfs(i + 1, start)
        }
        //choose
        if (isPalindrome(s, start, i)) {
            path.push(s.substring(start, i + 1))
            dfs(i + 1, i + 1)
            path.pop()
        }
    }
    dfs(0, 0)
    return result
};