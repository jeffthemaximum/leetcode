// Given an array of numbers nums, in which exactly two elements appear only once and all the other elements appear
// exactly twice. Find the two elements that appear only once.

// For example:

// Given nums = [1, 2, 1, 3, 2, 5], return [3, 5].

// Note:
// The order of the result is not important. So in the above example, [5, 3] is also correct.
// Your algorithm should run in linear runtime complexity. Could you implement it using only constant space complexity?

/**
 * @param {number[]} nums
 * @return {number[]}
 */

var numInArray = function(my_num, my_array){
    // checks if num in array
    // returns true if it is, else false
    return (my_array.indexOf(my_num) !== -1)
};

var singleNumber = function(nums) {
    debugger;
    var uniques = [];
    len = nums.length;
    //iterate over all nums
    for(var i = 0; i < len; i++) {
        //if num in uniques
        if (numInArray(nums[i], uniques)) {
            //remove num from unqiues
            uniques.splice(uniques.indexOf(nums[i]), 1);
        } else {
            //add num to uniques
            uniques.push(nums[i]);
        }
    }
    return uniques;
};

//console.log(singleNumber([1, 2, 1, 3, 2, 5]));
