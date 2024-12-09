/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let water = 0;
  const leftMax = new Array(height.length).fill(0);
  const rightMax = new Array(height.length).fill(0);

  leftMax[0] = height[0];
  rightMax[height.length - 1] = height[height.length - 1];
  for (let i = 1; i < height.length; i++) {
    leftMax[i] = Math.max(height[i], leftMax[i - 1]);
  }
  for (let i = height.length - 2; i >= 0; i--) {
    rightMax[i] = Math.max(height[i], rightMax[i + 1]);
  }
  for (let i = 0; i < height.length; i++) {
    water += Math.max(0, Math.min(leftMax[i], rightMax[i]) - height[i]);
  }
  return water;

  //method1 : brute force algorithm
  //   let water = 0;
  //   for (let i = 0; i < height.length; i++) {
  //     let leftMax = 0,
  //       rightMax = 0;
  //     for (let j = 0; j < i; j++) {
  //       leftMax = Math.max(leftMax, height[j]);
  //     }
  //     for (let j = i; j < height.length; j--) {
  //       rightMax = Math.max(rightMax, height[j]);
  //     }
  //     water = Math.max(0, Math.min(leftMax, rightMax) - height[i]);
  //   }
  //   return water;
};
