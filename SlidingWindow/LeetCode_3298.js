/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var validSubstringCount = function (word1, word2) {
    if (word1.length < word2.length) {
        return 0
    }

    const diff = new Array(26).fill(0)
    for (const c of word2) {
        diff[c.charCodeAt(0) - 'a'.charCodeAt(0)]++
    }

    let less = 0
    for (const c of diff) {
        if (c > 0) {
            less++
        }
    }

    let result = 0
    let left = 0
    for (const ch of word1) {
        const c = ch.charCodeAt(0) - 'a'.charCodeAt(0)
        diff[c]--
        if (diff[c] === 0) {
            less--
        }

        while (less === 0) {
            const outChar = word1[left++].charCodeAt(0) - 'a'.charCodeAt(0)
            if (diff[outChar] === 0) {
                less++
            }
            diff[outChar]++
        }
        result += left
    }
    return result

};