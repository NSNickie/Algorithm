/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function (ratings) {
  const candies = new Array(ratings.length).fill(1);
  for (let i = 0; i < ratings.length - 1; i++) {
    if (ratings[i] < ratings[i + 1]) {
      candies[i + 1] = candies[i] + 1;
    }
  }
  for (let i = ratings.length - 2; i >= 0; i--) {
    if (ratings[i] > ratings[i + 1]) {
      candies[i] = Math.max(candies[i], candies[i + 1] + 1);
    }
  }
  return candies.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
};
