/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    // let sen = s.trim().replace(/\s+/g, ' ')
    // const arr = sen.split(' ')
    // arr.reverse()
    // return arr.join(' ')
    let result = []
    let i = s.length - 1
    while (i >= 0) {
        if (s[i] === ' ') {
            i--;
            continue
        }
        let j = i
        while (j >= 0 && s[j] !== ' ') j--
        result.push(s.slice(j+1,i+1))
        i=j
    }
    return result.join(' ')
};