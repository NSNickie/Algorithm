/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function (s, k) {
  let result = 0;
  let currVowel = 0;
  for (let i = 0; i < s.length; i++) {
    if (
      s[i] === 'a' ||
      s[i] === 'e' ||
      s[i] === 'i' ||
      s[i] === 'o' ||
      s[i] === 'u'
    ) {
      currVowel++;
    }
    if (i < k - 1) {
      continue;
    }
    result = Math.max(result, currVowel);
    if (
      s[i - k + 1] === 'a' ||
      s[i - k + 1] === 'e' ||
      s[i - k + 1] === 'i' ||
      s[i - k + 1] === 'o' ||
      s[i - k + 1] === 'u'
    ) {
      currVowel--;
    }
  }
  return result;
};
