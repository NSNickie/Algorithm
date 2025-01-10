/**
 * @param {string} answerKey
 * @param {number} k
 * @return {number}
 */
var maxConsecutiveAnswers = function (answerKey, k) {
    let maxT = 0
    let leftT = 0
    let fCount = 0
    for (let i = 0; i < answerKey.length; i++) {
        if (answerKey[i] === 'F') {
            while (fCount >= k) {
                if (answerKey[leftT] === 'F') {
                    fCount--
                }
                leftT++
            }
            fCount++
        }
        maxT = Math.max(i - leftT + 1, maxT)
    }

    let maxF = 0
    let leftF = 0
    let tCount = 0
    for (let i = 0; i < answerKey.length; i++) {
        if (answerKey[i] === 'T') {
            while (tCount >= k) {
                if (answerKey[leftF] === 'T') {
                    tCount--
                }
                leftF++
            }
            tCount++
        }

        maxF = Math.max(i - leftF + 1, maxF)
    }
    // console.log(maxF,maxT)
    return Math.max(maxF,maxT)
};