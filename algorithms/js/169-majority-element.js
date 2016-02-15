// Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

// You may assume that the array is non-empty and the majority element always exist in the array.

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    var count = [];
    var len = nums.length
    var maj = len/2;
    for (var i = 0; i <= len; i++) {
        if (count[nums[i]] === undefined) {
            count[nums[i]] = 1;
        } else {
            count[nums[i]] += 1;
        }
        if (count[nums[i]] > maj) {
            return nums[i];
        }
    }
    return false;
};


test = [1]
majorityElement(test);
