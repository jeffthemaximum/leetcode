// There are n bulbs that are initially off. You first turn on all the bulbs.
// Then, you turn off every second bulb. On the third round, you toggle every third bulb
// (turning on if it's off or turning off if it's on). For the nth round, you only toggle the last bulb.
// Find how many bulbs are on after n rounds.

// Example:

// Given n = 3.

// At first, the three bulbs are [off, off, off].
// After first round, the three bulbs are [on, on, on].
// After second round, the three bulbs are [on, off, on].
// After third round, the three bulbs are [on, off, off].

// So you should return 1, because there is only one bulb is on.

/**
 * @param {number} n
 * @return {number}
 */


var bulbSwitch = function(n) {
    if (n = 0) {
        return n;
    }
    var i = 2;
    var count = 0;
    while (Math.pow(i, 2) <= n) {
        count += 1;
        i += 1;
    }
    return count+1;
}

var bulbSwitch2 = function(n) {
    return Math.floor(Math.sqrt(n));
}

