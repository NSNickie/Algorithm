/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  s = s.replace(/[^\w]|_/g, '').toLocaleLowerCase();

  // console.log(s)
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    if (s[left] === s[right]) {
      left++;
      right--;
    } else {
      return false;
    }
  }
  return true;

  // s = s.replace(/[^\w]|_/g, '')
  // s = s.toLocaleLowerCase()
  // const origin = s.split('')
  // const reverse = origin.toReversed()
  // for (let i = 0; i < origin.length; i++) {
  //     if (origin[i] !== reverse[i]) {
  //         return false
  //     }
  // }
  // return true
};
