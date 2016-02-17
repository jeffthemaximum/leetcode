// Given two strings s and t, write a function to determine if t is an anagram of s.

// For example,
// s = "anagram", t = "nagaram", return true.
// s = "rat", t = "car", return false.

// Note:
// You may assume the string contains only lowercase alphabets.

// Follow up:
// What if the inputs contain unicode characters? How would you adapt your solution to such case?

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

var stringSort = function(str) {
    return str.split("").sort().join();
};

var isAnagram = function(s, t) {
    s = stringSort(s);
    t = stringSort(t);
    if (s === t) {
        return true;
    } else {
        return false;
    }
};

console.log(isAnagram( "anagram", "nagaram"));