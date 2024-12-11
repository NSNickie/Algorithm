/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs.length === 0) return '';
  if (strs.length === 1) return strs[0];

  let common = strs[0];
  for (let i = 1; i < strs.length; i++) {
    while (!strs[i].startsWith(common)) {
      common = common.slice(0, common.length - 1);
      if (common === '') return '';
    }
  }
  return common;
};
