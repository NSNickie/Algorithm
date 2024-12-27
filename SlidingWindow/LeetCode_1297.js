/**
 * @param {string} s
 * @param {number} maxLetters
 * @param {number} minSize
 * @param {number} maxSize
 * @return {number}
 */
var maxFreq = function (s, maxLetters, minSize, maxSize) {
    const wordMap = new Map()
    const curLetterMap = new Map()
    let max = 0
    for (let i = 0; i < minSize; i++) {

        curLetterMap.set(s[i], (curLetterMap.get(s[i]) || 0) + 1)

    }

    for (let i = minSize; i <= s.length; i++) {
        const subString = s.slice(i - minSize, i)
        if (curLetterMap.size <= maxLetters) {
            wordMap.set(subString, (wordMap.get(subString) || 0) + 1)
            max = Math.max(wordMap.get(subString), max)
        }
        if (i === s.length) {
            break
        }
        const addChar=s[i]
        const removeChar=s[i-minSize]
       
        curLetterMap.set(addChar, (curLetterMap.get(s[i]) || 0) + 1)
        // console.log(curLetterMap)
        curLetterMap.set(removeChar, curLetterMap.get(removeChar) - 1)

        if (curLetterMap.get(removeChar) <= 0) {
            curLetterMap.delete(removeChar)
        }
    }
    // console.log(wordMap)
    // console.log(curLetterMap)
    return max
};