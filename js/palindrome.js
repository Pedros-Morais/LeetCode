
var isPalindrome = function(x) {
    if (x < 0) {
        return false;
    }

    const s = x.toString();
    const reversedS = s.split('').reverse().join('');

    return s === reversedS;
};