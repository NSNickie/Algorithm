/**
 * @param {string} s
 * @return {number}
 */
var numberOfSubstrings = function (s) {
  let left = 0;
  let count = 0;
  const charCount = [0, 0, 0]; 

  for (let right = 0; right < s.length; right++) {
    charCount[s.charCodeAt(right) - "a".charCodeAt(0)]++; 
    while (charCount[0] > 0 && charCount[1] > 0 && charCount[2] > 0) {
      count += s.length - right;
      charCount[s.charCodeAt(left) - "a".charCodeAt(0)]--;
      left++;
    }
  }
  return count;
};
