/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    if (!s || s.length === 0) return "";
    const dp = new Array(s.length).fill(false).map(() => new Array(s.length).fill(false))
    let result = ''
    for (let i = 0; i < s.length; i++) {
        dp[i][i] = true
        result = s[i]
    }

    for (let i = 2; i <= s.length; i++) {
        for (let j = 0; j <= s.length - i; j++) {
            let k = j + i - 1
            if (s[j] === s[k]) {
                if (i === 2 || dp[j + 1][k - 1]) {
                    dp[j][k] = true;
                    if (i > result.length) {
                        result = s.slice(j, k + 1)
                    }
                }
            }
        }
    }
    console.log(dp)
    return result


};