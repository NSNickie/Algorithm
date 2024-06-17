var isValid = function (s) {
    const stack = []
    const map = new Map([['(', ')'], ['[', ']'], ['{', '}']])
    for (const char of s) {
        if (char === '(' || char === '[' || char === '{') {
            stack.push(char)
        } else {
            const c = stack.pop()

            if (char !== map.get(c)) {
                return false
            }
        }
    }
    return stack.length === 0
};