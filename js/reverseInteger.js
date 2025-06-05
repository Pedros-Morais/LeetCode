/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const limit = 2147483647; // 2^31 - 1
    const sign = x < 0 ? -1 : 1;
    let numStr = Math.abs(x).toString();
    let reversedStr = numStr.split('').reverse().join('');
    let reversedNum = parseInt(reversedStr, 10);

    if (reversedNum > limit) {
        return 0;
    }

    return sign * reversedNum;
};