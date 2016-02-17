// Given an array of integers, find if the array contains any duplicates. Your function should
// return true if any value appears at least twice in the array, and it should return false if
// every element is distinct.

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    debugger;
    var count = [];
    var len = nums.length;
    for (var i = 0; i <= len; i++) {
        if (count[nums[i]] === undefined) {
            count[nums[i]] = 1;
        } else {
            return true;
        }
    }
    return false;
};

var x = [1, 2, 3, 4, 4, 5, 6];
console.log(containsDuplicate(x));
