/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function (s) {
    const result = []
    const map = new Map()
    for (let i = 0; i < s.length; i++) {
        map.set(s[i], i)
    }
    let start = 0
    let end = 0
    for (let i = 0; i < s.length; i++) {
        end = Math.max(end, map.get(s[i]))
        if (end === i) {
            result.push(end - start + 1)
            start = i + 1
        }
    }
    return result
};