"use strict";
function minDifference(nums) {
    if (nums.length <= 4)
        return 0;
    let get4SmallestValues = function (nums) {
        let result = nums.slice(0, nums.length >= 4 ? 4 : nums.length);
        for (let i = result.length; i < nums.length; i++) {
            let largestIndex = findLargestIndex(result);
            if (result[largestIndex] > nums[i]) {
                result[largestIndex] = nums[i];
            }
        }
        return result.sort((a, b) => a - b);
    };
    let get4BiggestValues = function (nums) {
        let result = nums.slice(0, nums.length >= 4 ? 4 : nums.length);
        for (let i = result.length; i < nums.length; i++) {
            let largestIndex = findSmallestIndex(result);
            if (result[largestIndex] < nums[i]) {
                result[largestIndex] = nums[i];
            }
        }
        return result.sort((a, b) => a - b);
    };
    function findLargestIndex(nums) {
        let result = 0;
        let largest = nums[0];
        for (let i = 1; i < nums.length; i++) {
            if (nums[i] > largest) {
                largest = nums[i];
                result = i;
            }
        }
        return result;
    }
    function findSmallestIndex(nums) {
        let result = 0;
        let smallest = nums[0];
        for (let i = 1; i < nums.length; i++) {
            if (nums[i] < smallest) {
                smallest = nums[i];
                result = i;
            }
        }
        return result;
    }
    let smallest = get4SmallestValues(nums);
    let biggest = get4BiggestValues(nums);
    let results = [
        biggest[0] - smallest[0],
        biggest[1] - smallest[1],
        biggest[2] - smallest[2],
        biggest[3] - smallest[3]
    ].filter((value) => value >= 0);
    console.log(smallest);
    console.log(biggest);
    console.log(results);
    return results[findSmallestIndex(results)];
}
;
console.log(minDifference([6, 6, 0, 1, 1, 4, 6]));
