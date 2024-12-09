/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };
  let answer = 0;
  for (let i = 0; i < s.length; i++) {
    const current = map[s[i]];
    const next = map[s[i + 1]] || 0;
    if (current < next) {
      answer -= current;
    } else {
      answer += current;
    }
  }
  return answer;

  // let answer = 0
  // for (let i = 0; i < s.length; i++) {
  //     switch (s[i]) {
  //         case 'I':
  //             if (i + 1 < s.length) {
  //                 if (s[i + 1] === 'V') {
  //                     answer += 4
  //                     break
  //                 } else if (s[i + 1] === 'X') {
  //                     answer += 9
  //                     break
  //                 }
  //             }
  //             answer += 1
  //             break
  //         case 'V':
  //             if (i - 1 >= 0) {
  //                 if (s[i - 1] === 'I') {
  //                     break
  //                 }
  //             }
  //             answer += 5
  //             break
  //         case 'X':
  //             if (i - 1 >= 0) {
  //                 if (s[i - 1] === 'I') {
  //                     break
  //                 }
  //             }
  //             if (i + 1 < s.length) {
  //                 if (s[i + 1] === 'L') {
  //                     answer += 40
  //                     break
  //                 } else if (s[i + 1] === 'C') {
  //                     answer += 90
  //                     break
  //                 }
  //             }
  //             answer += 10
  //             break
  //         case 'L':
  //             if (i - 1 >= 0) {
  //                 if (s[i - 1] === 'X') {
  //                     break
  //                 }
  //             }

  //             answer += 50
  //             break
  //         case 'C':
  //             if (i - 1 >= 0) {
  //                 if (s[i - 1] === 'X') {
  //                     break
  //                 }
  //             }
  //             if (i + 1 < s.length) {
  //                 if (s[i + 1] === 'D') {
  //                     answer += 400
  //                     break
  //                 } else if (s[i + 1] === 'M') {
  //                     answer += 900
  //                     break
  //                 }
  //             }
  //             answer += 100
  //             break
  //         case 'D':
  //             if (i - 1 >= 0) {
  //                 if (s[i - 1] === 'C') {
  //                     break
  //                 }
  //             }
  //             answer += 500
  //             break
  //         case 'M':
  //             if (i - 1 >= 0) {
  //                 if (s[i - 1] === 'C') {
  //                     break
  //                 }
  //             }
  //             answer += 1000
  //             break
  //     }
  // }

  // return answer
};
