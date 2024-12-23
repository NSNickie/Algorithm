/**
 * @param {string} blocks
 * @param {number} k
 * @return {number}
 */
var minimumRecolors = function (blocks, k) {
  let curBlacks = 0;
  let max = 0;

  for (let i = 0; i < k; i++) {
    if (blocks[i] === 'B') {
      curBlacks++;
      max = Math.max(curBlacks, max);
    }
  }
  for (let i = k; i < blocks.length; i++) {
    if (blocks[i] === 'B') curBlacks++;
    if (blocks[i - k] === 'B') curBlacks--;
    max = Math.max(curBlacks, max);
  }
  return k - max;
};
