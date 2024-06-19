var decodeString = function (s) {
    let stack = [];
    let currentNum = 0;
    let currentString = '';

    for (const char of s) {
        if (char === '[') {
            // Push the current string and number onto the stack
            stack.push(currentString);
            stack.push(currentNum);
            // Reset current string and number
            currentString = '';
            currentNum = 0;
        } else if (char === ']') {
            // Pop the number and previous string from the stack
            let num = stack.pop();
            let prevString = stack.pop();
            // Repeat the current string num times and append to previous string
            currentString = prevString + currentString.repeat(num);
        } else if (/\d/.test(char)) {
            // Build the current number
            currentNum = currentNum * 10 + parseInt(char);
        } else {
            // Build the current string
            currentString += char;
        }
    }

    return currentString;
};

// 测试
console.log(decodeString("3[a2[c]]")); // "accaccacc"
