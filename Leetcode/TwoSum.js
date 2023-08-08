//Given an array of integers nums and an integer target, 
//return indices of the two numbers such that they add up to target.

//time complexity of O(n^2)
var twoSum = function(nums, target) {
    for(let i=0; i<nums.length; i++){
        for(let j=i+1; j<nums.length; j++){
            if(nums[i] + nums[j] === target){
                return [i,j]
            }
        }
    }
    return []
};

//optimized to a time complexity of O(n)
var twoSum = function(nums, target) {
    const numIndices = {};

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        if (complement in numIndices) {
            return [numIndices[complement], i];
        }

        numIndices[nums[i]] = i;
    }

    return [];
};
