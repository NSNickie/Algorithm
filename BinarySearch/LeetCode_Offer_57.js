/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let left=0
    let right=nums.length-1
    let sum=nums[left]+nums[right]
    while (sum!==target){
        if (sum>target){
            right-=1
        }else{
            left+=1
        }
        sum=nums[left]+nums[right]
    }

    return [nums[left],nums[right]]
};