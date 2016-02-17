/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    var count = [];
    var len = nums.length;
    for (var i = 0; i <= len; i ++) {
        if (count[nums[i]] === undefined) {
            count[nums[i]] = 1;
        } else {
            count[nums[i]] += 1;
        }
    }

    for (var key in count) {
        if (count[key] === 1) {
            return Number(key);
        }
    }
};

var test = [1, 1, 2, 2, 3, 3, 4, 4, 5, 6, 6, 7, 7];

console.log(singleNumber(test));
