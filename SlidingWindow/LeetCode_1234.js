/**
 * @param {string} s
 * @return {number}
 */
var balancedString = function (s) {
  const limit = s.length / 4;
  const count = { Q: 0, W: 0, E: 0, R: 0 };
  for (const char of s) {
    count[char]++;
  }

  console.log(count);
  if (
    count["Q"] <= limit &&
    count["W"] <= limit &&
    count["E"] <= limit &&
    count["R"] <= limit
  ) {
    return 0;
  }
  let min = Infinity;
  let left = 0;
  for (let right = 0; right < s.length; right++) {
    count[s[right]]--;
    while (
      count.Q <= limit &&
      count.W <= limit &&
      count.E <= limit &&
      count.R <= limit
    ) {
      // console.log(count)
      min = Math.min(min, right - left + 1);
      count[s[left]]++;
      left++;
    }
  }
  return min;
};
