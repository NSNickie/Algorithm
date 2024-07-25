/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
    const dp = new Array(s.length + 1).fill(false)
    dp[0] = true
    const wordSet = new Set(wordDict)
    for (let i = 0; i < dp.length; i++) {
        if (!dp[i]) continue
        for (let j = i + 1; j < s.length + 1; j++) {
            if (wordSet.has(s.slice(i, j))) {
                dp[j] = true
            }
        }
    }
    return dp[dp.length - 1]
};