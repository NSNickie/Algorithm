/**
 * @param {number} num
 * @param {number} k
 * @return {number}
 */
var divisorSubstrings = function (num, k) {
  let curStr = '';
  let count = 0;
  const str = num.toString();
  for (let i = 0; i < k; i++) {
    curStr = curStr.concat(str[i]);
  }
  // console.log(curStr)
  for (let i = k; i <= str.length; i++) {
    // console.log(parseInt(curStr))
    if (num % parseInt(curStr) === 0) {
      count++;
    }
    if (i === str.length) {
      break;
    }
    curStr = curStr.concat(str[i]);
    curStr = curStr.slice(1);
  }
  return count;
};
